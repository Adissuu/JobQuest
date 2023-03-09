const express = require('express')
const {
  createJobPosting,
  getJobPostings,
  getJobPosting,
  deleteJobPosting,
  updateJobPosting
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


module.exports = router