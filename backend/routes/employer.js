const express = require('express')
const {
  createEmployer,
  getEmployers,
  getEmployer,
  deleteEmployer,
  updateEmployer
} = require('../controllers/employerController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all Employer routes
router.use(requireAuth)

// GET all Employers
router.get('/', getEmployers)

//GET a single Employer
router.get('/:id', getEmployer)

// POST a new Employer
router.post('/', createEmployer)

// DELETE a Employer
router.delete('/:id', deleteEmployer)

// UPDATE a Employer
router.patch('/:id', updateEmployer)


module.exports = router
