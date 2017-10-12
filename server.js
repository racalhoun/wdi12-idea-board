//imports variables from .env file
require('dotenv').config() 
const express =require ('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//create a new app using express-employing bodyparser and setting the route for the UsersController
const app = express()
const bodyParser = require('body-parser')
const UsersController = require('./routes/UsersController')


//first two lines are connecting to MongoDB- the following connection methods test for a success or failure
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;

connection.on('connected', () =>{
    console.log('We have connected!')
})
connection.on('error', () =>{
    console.log('MongoDB Error:', err)
})
//Middleware
app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json())
app.use('/api/users', UsersController)
app.get('/', (req, res)=>{
   res.sendFile(`${__dirname}/client/build/index.html`)
})
 





const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log('App is listening', PORT)
})