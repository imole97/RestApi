//require .env library which loads all our enviroment variable from .env
require('dotenv').config({path: './config/.env'})
require('./config/mongoose')
const express = require('express')

// create app variable to configure our server
const app = express()

//set up server to accept JSON which allow our server accept JSON as a body
app.use(express.json())

const userRouter = require('./routes/user-route')
app.use('/users', userRouter)

//set up server to accept JSON which allow our server accept JSON as a body
app.use(express.json())

app.listen('1000', () => console.log('server connected to port 1000'))
