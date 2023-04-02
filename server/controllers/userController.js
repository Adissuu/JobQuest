const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    //  return short id
    const shortId = user.shortId

    //  return type
    const type = user.type


    res.status(200).json({ user, token, shortId, type })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { name, email, password, type } = req.body

  try {
    const user = await User.signup(name, email, password, type)

    // create a token
    const token = createToken(user._id)

    const shortId = user.shortId


    res.status(200).json({ name, email, token, shortId, type })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { signupUser, loginUser }