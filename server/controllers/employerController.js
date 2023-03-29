const Employer = require('../models/employerModel')
const mongoose = require('mongoose')

//get all employers
const getEmployers = async (req, res) => {
  const employers = await Employer.find({}).sort({createdAt: -1})

  res.status(200).json(employers)
}

// get a single employer
const getEmployer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such employer'})
  }

  const employer = await Employer.findById(id)

  if (!employer) {
    return res.status(404).json({error: 'No such employer'})
  }

  res.status(200).json(employer)
}

// create new employer
const createEmployer = async (req, res) => {
  const {name, numberOfJobPostings, jobPostings, shortId} = req.body

  let emptyFields = []

  if(!name) {
    emptyFields.push('name')
  }
  if(!numberOfJobPostings) {
    emptyFields.push('numberOfJobPostings')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const employer = await Employer.create({name, numberOfJobPostings, jobPostings, shortId})
    res.status(200).json(employer)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a employer
const deleteEmployer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Employer'})
  }
  const employer = await Employer.findOneAndDelete({_id: id})

  if (!employer) {
    return res.status(400).json({error: 'No such employer'})
  }

  res.status(200).json(employer)
}

// update a employer
const updateEmployer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such employer'})
  }

  const employer = await Employer.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!employer) {
    return res.status(400).json({error: 'No such employer'})
  }
  res.status(200).json(employer)
}

// get an employer from shortId
const getEmployerFromShortId = async (req, res) => {
  const { shortId } = req.params
  
  const employer = await Employer.find({shortId: shortId})

  if (!employer) {
    return res.status(404).json({error: 'No such employer'})
  }
  
  res.status(200).json(employer)
}

module.exports = {
  getEmployers,
  getEmployer,
  createEmployer,
  deleteEmployer,
  updateEmployer,
  getEmployerFromShortId
}