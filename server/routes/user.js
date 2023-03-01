const express = require("express");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /applicant.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const applicant = require("../models/applicantModel");

const shortId = require('shortid');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the applicants.
userRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("JobQuest");
  db_connect
    .collection("Users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by name
userRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new user.
userRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb("JobQuest");

  let myobj = {
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  console.log(myobj)
  db_connect.collection("Users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a applicant by id.
userRoutes.route("/user/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    },
  };
  db_connect
    .collection("Users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a applicant
userRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});


userRoutes.route("/signup").post(async function (req, res) {

    let db_connect = dbo.getDb();
    let myquery = { email: req.params.email};


    console.log(req);

    db_connect.collection("Users").findOne(myquery, function(err, results)
    //  check that the email isn't already used
    {
        if (err) throw err;
        let username = shortId.generate();
        //console.log(results == null);

        if (results == null)
        {
            let myobj = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                userId: username
            }
            //console.log(myobj)
            db_connect.collection("Users").insertOne(myobj);

            if (myobj.role == 0)
            //  create new applicant
            {
                db_connect.collection("Applicants").insertOne(
                {
                    userId: username
                }
                );
            }
            else 
            //  create new employer
            {
                db_connect.collection("Employers").insertOne(
                    {
                        userId: username
                    }
                )
            }
            res.json("Signup successful. Enjoy your quest!")
        }
        else
        {
            res.json("Email is already used. Select another email.");
        }
    });
  })


userRoutes.route("/signin").post(async function (req, res) {

    let db_connect = dbo.getDb();
    let myquery = { email: req.body.email, password: req.body.password };
    console.log(req.body.email);
    console.log(req.body.password);


    db_connect.collection("Users").findOne(myquery, function(err, results)
    //  check if there's a user with the corresponding email and password
    {
        if (err) throw err;
        console.log(results == null);

        if (results == null)
        {
            res.json("Username or password invalid. Please try again.")
        }
        else
        {
            res.json(results);
        }
    });
  })

module.exports = userRoutes;