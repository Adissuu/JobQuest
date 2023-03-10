const Employer = require('../models/employerModel')
const jopPostings = require('../models/jobPostingModel')
const mongoose = require('mongoose')

//get all employers
const getEmployers = async (req, res) => {
  const user_id = req.user._id

  const employers = await Employer.find({user_id}).sort({createdAt: -1})

  res.status(200).json(employers)
}

// get a single employer
const getEmployer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such employer'})
  }

  const employer = await employer.findById(id)

  if (!employer) {
    return res.status(404).json({error: 'No such employer'})
  }
  
  res.status(200).json(employer)
}


// create new employer
const createEmployer = async (req, res) => {
  const {title, load, reps} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!load) {
    emptyFields.push('load')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const employer = await Employer.create({name, numberOfJobPostings, jobPostings, user_id})
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


module.exports = {
  getEmployers,
  getEmployer,
  createEmployer,
  deleteEmployer,
  updateEmployer
}
