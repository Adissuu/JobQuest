const express = require("express");

// employerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /employer.
const employerRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const employer = require("../models/employerModel");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the employers.
employerRoutes.route("/employer").get(function (req, res) {
  let db_connect = dbo.getDb("JobQuest");
  db_connect
    .collection("Employers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single employer by id
employerRoutes.route("/employer/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Employers")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new employer.
employerRoutes.route("/employer/add").post(function (req, response) {
  let db_connect = dbo.getDb();


  console.log(req);
  console.log(req.body);

  let myobj = {
    name: req.body.name,
    numberOfJobPostings: req.body.numberOfJobPostings,
  };

  console.log(myobj)
  db_connect.collection("employers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a employer by id.
employerRoutes.route("/update/:id").post(function (req, response) {
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
    .collection("Employers")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a employer
employerRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Employers").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = employerRoutes;
