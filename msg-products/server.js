const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan")
const bodyParser = require("body-parser")

const ProductRoute = require("./routes/products")

//mongoose.connect("mongodb://mongo:27017/msg", {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect("mongodb+srv://ganeshstage1:TPRDe1OtI8zijUtZ@msg.s0oxzu5.mongodb.net/msg?retryWrites=true&w=majority&appName=msg")

const dbConn = mongoose.connection

dbConn.on('error', (err) => {
    console.log("Error > ", err)
})

dbConn.once('open', () => {
    console.log("DB Conection Established!")
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.port || 8090

app.listen(PORT, () => {
    console.log(`Server is running on the port : ${PORT}`)
})

app.use('/api/v1/products', ProductRoute)