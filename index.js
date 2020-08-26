
const AuthRouter = require('./routers/Auth')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require("mongoose");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})); 

app.use('/auth', AuthRouter)

mongoose.connect(`mongodb://root:toor@mongo:27017`, { poolSize: 10, bufferMaxEntries: 0, reconnectTries: 5000, useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (error) console.log(error)
    else app.listen(3000, () => {
        console.log("Server is waiting for a connection...")
    })        
})
