require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jobPostingRoutes = require('./routes/jobPostings')
const userRoutes = require('./routes/user')
const applicantRoutes = require('./routes/applicants')
const employerRoutes = require('./routes/employer')
var multer  = require('multer')

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

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

//store it to a “uploads” directory and make image accessible on web page
app.use(express.static(__dirname + '/public'));
//serve all files/folders inside of the 'uploads' directory
// And make them accessible through http://localhost:3000/uploads
app.use('/uploads', express.static('uploads'));

app.post('/', upload.single('profile-file'), function (req, res, next) {
  // req.file is the `profile-file` file
  // req.body will hold the text fields, if there were any
  console.log(JSON.stringify(req.file))
  var response = '<a href="/">Home</a><br>'
  response += "Files uploaded successfully.<br>"
  response += `<img src="${req.file.path}" /><br>`
  return res.send(response)
})
