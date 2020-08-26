
const User = require("../models/User");

function registration(body) {
    let result = []
    result.push(
        ...Object.keys(body).map(key => ['name', 'email', 'password'].includes(key)),
        ...Object.keys(body).map(key => !(key === ''))
    )
    if (!all(result)) return false
    // result.push(body.password >= 8)
    // result.push((await User.find({email: body.email})) == [])
    if (!all(result)) return false
    return true
}

function all(array) {
    return array.length == array.filter(key => key !== false).length ? true : false
}

module.exports = { registration }
