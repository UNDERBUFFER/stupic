
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const photoScheme = new Schema({
	userId: String,
	description: String,
	coordinates: [Number, Number],
	path: String
})

module.exports = mongoose.model("Photo", photoScheme)
