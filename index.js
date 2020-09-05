
const AuthRouter = require('./routers/Auth')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const fileUpload = require('express-fileupload')
const MIDDLEWARES = require('./utils/middlewares')
const mongoose = require("mongoose")
const UserRouter = require('./routers/User')

const app = express()

app.use(cookieParser())
app.use(fileUpload())
app.use(express.static('static'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

for(let middleware of Object.keys(MIDDLEWARES)) {
    app.use(MIDDLEWARES[middleware])
}

app.use('/auth', AuthRouter)
app.use('/users', UserRouter)

mongoose.connect(`mongodb://root:toor@mongo:27017`, { poolSize: 10, bufferMaxEntries: 0, reconnectTries: 5000, useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (error) console.log(error)
    else app.listen(3000, () => {
        console.log("Server is waiting for a connection...")
    })        
})
