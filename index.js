
const express = require('express')
require('dotenv').config()
require('./database/connection')

// middleware
const bodyParser = require('body-parser')

//routes

const Loginroute =require('./routes/loginroute')
const categoryroute = require('./routes/categoryroute')

 const app = express()
 const port = process.env.PORT || 8000


 // use middleware
app.use(bodyParser.json())



//use route
app.use('/api',Loginroute)
app.use('/api',categoryroute)

app.listen(port,() =>{
    console.log(`Server started succesfully at port ${port}`)
})