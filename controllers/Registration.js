
const User = require('../models/User')

class Registration {
    static get(request, response) {
        response.render("registration.hbs");
    }
    static post(request, response) {
        (new User({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        })).save((error) => {
            if (error) console.log(error)
            else response.send('are you registered!')
        })
    }
}

module.exports = Registration
