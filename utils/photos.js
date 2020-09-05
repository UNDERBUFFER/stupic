
const fs = require('fs')

function uuid() {
	return Math.random().toString(36).substr(2, 9);
}

function servePhoto(requestPhoto) {
	const url = `/public/${uuid()}-${requestPhoto.name}`
	const path = `${process.cwd()}/static${url}`
	fs.writeFileSync(path, requestPhoto.data)
	return url
}

module.exports = servePhoto
