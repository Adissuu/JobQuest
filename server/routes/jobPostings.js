const express = require('express')
const {
  createJobPosting,
  getJobPostings,
  getJobPosting,
  deleteJobPosting,
  updateJobPosting,
  getAllJobPostingsByEmployer,
  getAllJobPostingsByApplicant
} = require('../controllers/jobPostingController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all jobPosting routes
router.use(requireAuth)

// GET all jobPostings
router.get('/', getJobPostings)

//GET a single jobPosting
router.get('/:id', getJobPosting)

// POST a new jobPosting
router.post('/', createJobPosting)

// DELETE a jobPosting
router.delete('/:id', deleteJobPosting)

// UPDATE a jobPosting
router.patch('/:id', updateJobPosting)

// GET all job postings by employer
router.get('/employer/:id', getAllJobPostingsByEmployer)

// GET all job postings by applicant
//router.get('/applicant/:id', getAllJobPostingsByApplicant)



module.exports = router