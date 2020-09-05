
const User = require("../models/User")

function registration(body) {
    let result = []
    result.push(
        ...['name', 'email', 'password'].map(key => Object.keys(body).includes(key)),
        ...Object.keys(body).map(key => !(body[key] === ''))
    )
    // result.push(body.password >= 8)
    // result.push((await User.find({email: body.email})) == [])
    return all(result)
}

function correctPhoto(body, files) {
    let result = []
    result.push(
        Object.keys(body).includes('description'),
        isNotEmpty(files)
    )
    if (!all(result)) return false
    result.push(
        ...Object.keys(body).map(key => !(body[key] === ''))),
        Object.keys(files).includes('file'),
        Object.keys(files).map(key => ['image/png', 'image/jpeg'].includes(files[key].mimetype))
    return all(result)
}

function isNotEmpty(data) {
    if ( Array.isArray(data) ) {        
        try {
            return (data.length > 0) ? true : false
        }
        catch(error) {}
    }
    return [undefined, null].includes(data) ? false : true
}

function all(array) {
    return array.length == array.filter(key => key !== false).length ? true : false
}

module.exports = { registration, correctPhoto, isNotEmpty }
