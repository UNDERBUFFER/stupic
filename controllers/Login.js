
const User = require('../models/User')

class Login {
    static get(request, response) {
        response.render("login.hbs");
    }
    static post(request, response) {
        // filter
        console.log(request.body)
        response.render("login.hbs");
    }
}

module.exports = Login
