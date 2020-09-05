
const fs = require('fs')


function uuid() {
	return Math.random().toString(36).substr(2, 9);
}

function servePhoto(requestPhoto) {
	const url = `${process.cwd()}/photos/${uuid()}`
	fs.writeFileSync(url, requestPhoto.data)
	// + модель
}

module.exports = servePhoto
