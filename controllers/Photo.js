
const User = require('../models/User')
const servePhoto = require('../utils/photos')

class Photo {
    static get(request, response) {
        const requestedUserPageById = request.params.id
        if (request.user !== null && request.user._id == requestedUserPageById) response.render('user-photos.hbs', { user: request.user })
        else {
        	User.find({ _id: requestedUserPageById}, (error, result) => {
        		if (error) console.log(error)
                if (result !== undefined) response.render('someone-photos.hbs', { user: result[0] })
                else response.render('404.hbs')
        	})
        }
    }
    static post(request, response) {
        const requestedUserPageById = request.params.id
        if (request.user !== null && request.user._id == requestedUserPageById) {
        	// console.log('REQUEST DATA:', request.files)
        	servePhoto()
        	response.render('user-photos.hbs', { user: request.user })
        }
        else {
        	User.find({ _id: requestedUserPageById}, (error, result) => {
        		if (error) console.log(error)
                if (result !== undefined) response.render('someone-photos.hbs', { user: result[0] })
                else response.render('404.hbs')
        	})
        }	
    }
}

module.exports = Photo
