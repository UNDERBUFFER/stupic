
const fs = require('fs')

function uuid() {
	return Math.random().toString(36).substr(2, 9);
}

function servePhoto(requestPhoto) {
	const url = `${process.cwd()}/photos/${uuid()}-${requestPhoto.name}`
	fs.writeFileSync(url, requestPhoto.data)
	return url
}

module.exports = servePhoto
