
const User = require('../models/User')

function login(request, response, user) {
    response.cookie('_id', user._id)
    request.user = user
}

function authenticate(email, password) {
    return new Promise((resolve, reject) => {
        User.find({ email, password }, (error, result) => {
            if (error) console.log(error)
            if (result.length > 0 && result[0].password === password) resolve(result[0])
            else resolve(null)
        })
    })
}

module.exports = { authenticate, login }
