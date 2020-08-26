
const User = require('../models/User')

class Registration {
    static get(request, response) {
        response.render("registration.hbs")
    }
    static post(request, response) {
        User.find({email: request.body.email}, (error, result) => {
            if (result.length == 0) (new User({
                name: request.body.name,
                email: request.body.email,
                password: request.body.password
            })).save((error) => {
                if (error) console.log(error)
                else response.send('are you registered!')
            })
            else response.render("registration.hbs")
        })
    }
}

module.exports = Registration
