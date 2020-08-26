
const User = require('../models/User')

class Login {
    static get(request, response) {
        response.render("login.hbs");
    }
    static post(request, response) {
        User.find({email: request.body.email}, (error, result) => {
            if (error) console.log(error)
            if (result.length > 0 && result[0].password === request.body.password) response.send("you are logged in")
            else response.render("login.hbs");
        })
    }
}

module.exports = Login
