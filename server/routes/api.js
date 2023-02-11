const express = require('express');
const router = express.Router();
const Test = require('../models/test');

router.get('/tests', (req, res, next) => {
  test.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/tests', (req, res, next) => {
  if (req.body.action) {
    test.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

module.exports = router;
