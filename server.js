require('dotenv').config() //imports variables from .env file
const express =require ('express')
const mongoose = require('mongoose')
//create a new app using express
const app = express()
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;

connection.on('connected', () =>{
    console.log('We have connected!')
})
connection.on('error', () =>{
    console.log('MongoDB Error:', err)
})

app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send('Hello World!')
})























const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log('App is listening', PORT)
})