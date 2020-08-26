
const express = require("express")
const User = require("../controllers/User")

const Router = express.Router()

Router.get('/:id', User.get)

module.exports = Router
