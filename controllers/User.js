
const UserModel = require('../models/User')

class User {
    static get(request, response) {
        const requestedUserPageById = request.params.id
        if (request.user !== null && request.user._id == requestedUserPageById) return response.render('user-page.hbs', { user: request.user })
        else {
            UserModel.find({ _id: requestedUserPageById }, (error, result) => {
                if (error) console.log(error)
                if (result !== undefined) response.render('someone-page.hbs', { user: result[0] })
                else response.render('404.hbs')
            })
        }
    }
}

module.exports = User
