const express = require("express");

// applicantRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /applicant.
const applicantRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const applicant = require("../models/applicantModel");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the applicants.
applicantRoutes.route("/applicant").get(function (req, res) {
  let db_connect = dbo.getDb("JobQuest");
  db_connect
    .collection("Applicants")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single applicant by id
applicantRoutes.route("/applicant/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Applicants")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new applicant.
applicantRoutes.route("/applicant/add").post(function (req, response) {
  let db_connect = dbo.getDb("JobQuest");

  let myobj = {
    name: req.body.name,
    numberOfJobApplications: req.body.numberOfJobApplications,

  };

  console.log(myobj)
  db_connect.collection("Applicants").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a applicant by id.
applicantRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("Applicants")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a applicant
applicantRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Applicants").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = applicantRoutes;