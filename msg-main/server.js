const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan")
const bodyParser = require("body-parser")
var cors = require('cors')

const MainRoute = require("./routes/main")

//mongoose.connect("mongodb://localhost:27017/msg", {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect("mongodb+srv://ganeshstage1:TPRDe1OtI8zijUtZ@msg.s0oxzu5.mongodb.net/msg?retryWrites=true&w=majority&appName=msg")

const db = mongoose.connection

db.on('error', (err) => {
    console.log("Error > ", err)
})

db.once('open', () => {
    console.log("DB Conection Established!")
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.port || 9000

app.listen(PORT, () => {
    console.log(`Server is running on the port : ${PORT}`)
})

app.use('/api/v1', MainRoute)
app.use(express.json());
