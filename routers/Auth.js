
const express = require("express")
const Login = require('../controllers/Login')
const Registration = require('../controllers/Registration')

const Router = express.Router()

Router.get('/login', Login.get)
Router.post('/login', Login.post)

Router.get('/registration', Registration.get)
Router.post('/registration', Registration.post)

module.exports = Router
