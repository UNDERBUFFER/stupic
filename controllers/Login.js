
const User = require('../models/User')
const { authenticate, login } = require('../utils/auth')

class Login {
    static get(request, response) {
        response.render("login.hbs")
    }
    static post(request, response) {
        authenticate(request.body.email, request.body.password).then(user => {
            if (user === null) response.render("login.hbs")
            else {
                login(request, response, user)
                response.send("you are logged in")
            }
        })
    }
}

module.exports = Login
