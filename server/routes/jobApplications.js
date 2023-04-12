const express = require('express')
const {
    getJobApplications,
    getJobApplication,
    createJobApplication,
    deleteJobApplication,
    updateJobApplication,
    hasApplicantAlreadyAppliedToPosting
  } = require('../controllers/jobApplicationController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all jobApplication routes
router.use(requireAuth)

// GET all jobApplications
router.get('/', getJobApplications)

//GET a single jobApplication
router.get('/:id', getJobApplication)

// POST a new jobApplication
router.post('/', createJobApplication)

// DELETE a jobApplication
router.delete('/:id', deleteJobApplication)

// UPDATE a jobApplication
router.patch('/:id', updateJobApplication)

router.post('/hasApplied', hasApplicantAlreadyAppliedToPosting)


module.exports = router