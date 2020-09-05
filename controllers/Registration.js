
const fs = require('fs')
const User = require('../models/User')
const { login } = require('../utils/auth')

class Registration {
    static get(request, response) {
        response.render("registration.hbs")
    }
    static post(request, response) {
        User.find({email: request.body.email}, (error, result) => {
            if (error) console.log(error)
            if (result.length == 0) {
                let _id = "1"
                try {
                    _id = String(Number(fs.readFileSync('COUNTER.txt', 'utf8')) + 1)
                }
                catch(error) {}
                const user = new User({
                    _id,
                    name: request.body.name,
                    email: request.body.email,
                    password: request.body.password
                })
                user.save((error) => {
                    if (error) console.log(error)
                    else {
                        fs.writeFileSync('COUNTER.txt', _id)
                        login(request, response, user)
                        response.send('are you registered!')
                    }
                })
            }
            else response.render("registration.hbs")
        })
    }
}

module.exports = Registration
