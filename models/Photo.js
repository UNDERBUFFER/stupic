
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const userScheme = new Schema({
	description: String,
	coordinates: [Number, Number],
	path: String
})

module.exports = mongoose.model("User", userScheme)
