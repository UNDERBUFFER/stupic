
const express = require("express")
const Photo = require('../controllers/Photo')
const User = require("../controllers/User")

const Router = express.Router()

Router.get('/:id', User.get)
Router.get('/:id/photos', Photo.get)
Router.post('/:id/photos', Photo.post)

module.exports = Router
