const express = require('express');
const router = express.Router();
const jobpostings = require('../controllers/jobpostings');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateJobposting } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Jobposting = require('../models/jobposting');

router.route('/')
    .get(catchAsync(jobpostings.index))
    .post(isLoggedIn, upload.array('image'), validateJobposting, catchAsync(jobpostings.createJobposting))


router.get('/new', isLoggedIn, jobpostings.renderNewForm)

router.route('/:id')
    .get(catchAsync(jobpostings.showJobposting))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateJobposting, catchAsync(jobpostings.updateJobposting))
    .delete(isLoggedIn, isAuthor, catchAsync(jobpostings.deleteJobposting));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(jobpostings.renderEditForm))



module.exports = router;