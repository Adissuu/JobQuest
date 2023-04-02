const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const shortid = require('shortId')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  }

})

// static signup method
userSchema.statics.signup = async function (name, email, password, type) {

  // validation
  //console.log(email)
  //console.log(password)
  //console.log(type)

  if (!name || !email || !password || !type) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const shortId = shortid.generate()

  const user = await this.create({ name, email, password: hash, shortId, type })

  return user
}

// static login method
userSchema.statics.login = async function (email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)