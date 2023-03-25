require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jobPostingRoutes = require('./routes/jobPostings')
const userRoutes = require('./routes/user')
const applicantRoutes = require('./routes/applicants')
const employerRoutes = require('./routes/employer')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/jobPostings', jobPostingRoutes)
app.use('/api/user', userRoutes)
app.use('/api/applicants', applicantRoutes)
app.use('/api/employers', employerRoutes)

// connect to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
