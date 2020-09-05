
const { correctPhoto } = require('../utils/filters')
const { isNotEmpty } = require('../utils/filters')
const User = require('../models/User')
const PhotoModel = require('../models/Photo')
const servePhoto = require('../utils/photos')

class Photo {
    static get(request, response) {
        const requestedUserPageById = request.params.id
        if (request.user !== null && request.user._id == requestedUserPageById) response.render('user-photos.hbs', { user: request.user })
        else {
            User.find({ _id: requestedUserPageById}, (error, result) => {
                if (error) console.log(error)
                if ( isNotEmpty(result) ) response.render('someone-photos.hbs', { user: result[0] })
                else response.render('404.hbs')
        })
        }
    }
    static post(request, response) {
        const requestedUserPageById = request.params.id
        if (isNotEmpty(request.user) && request.user._id == requestedUserPageById) {
            // + list photos
            if (correctPhoto(request.body, request.files)) {
                const url = servePhoto(request.files.file)
            }
            // new PhotoModel()
            response.render('user-photos.hbs', { user: request.user })
        }
        else Photo.get(request, response)
    }
}

module.exports = Photo
