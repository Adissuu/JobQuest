const express = require('express')
const {
  createApplicant,
  getApplicants,
  getApplicant,
  deleteApplicant,
  updateApplicant,
  getApplicantFromShortId,
  getApplicantsByJobPosting
} = require('../controllers/applicantController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all applicant routes
router.use(requireAuth)

// GET all applicants
router.get('/', getApplicants)

//GET a single applicant
router.get('/:id', getApplicant)

// POST a new applicant
router.post('/', createApplicant)

// DELETE a applicant
router.delete('/:id', deleteApplicant)

// UPDATE a applicant
router.patch('/:id', updateApplicant)

// GET applicant from short Id
router.get('/short/:shortId', getApplicantFromShortId)

//  GET all applicants for a specific job posting
router.get('/jobPosting/:id', getApplicantsByJobPosting)

module.exports = router