
const User = require('../models/User')

function authorizationMiddleware(request, response, next) {
    try {
        const _id = request.cookies._id
        User.find({ _id }, (error, result) => {
            if (error) console.log(error)
            if (result.length > 0) request.user = result[0]
            else request.user = null
            next()
        })
    } catch (error) {
        next()
    }
}

function loggingMiddleware(request, response, next) {
    console.log({
        method: request.method.toUpperCase(),
        url: request.originalUrl,
        status: response.statusCode,
        user: request.user === null ? null : request.user.email
    })
    next()
}

module.exports = { authorizationMiddleware, loggingMiddleware }
