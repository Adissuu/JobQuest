const express = require('express');
const router = express.Router();
const employer = require('../models/employer');

router.get('/employers', (req, res, next) => {
    employer.find({}, 'CompanyName')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/employers', (req, res, next) => {
  if (req.body.CompanyName) {
    employer.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

module.exports = router;
