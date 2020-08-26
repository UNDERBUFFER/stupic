
const express = require('express')
const bodyParser = require('body-parser')
const AuthRouter = require('./routers/Auth')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})); 

app.use('/auth', AuthRouter)

app.listen(3000, () => {
    console.log("Server is waiting for a connection...")
})
