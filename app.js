const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//Load environment variables from the config file
dotenv.config({ path: './config.env' })


const app = express()

// Middleware to parse JSON data sent to the server
app.use(express.json())

module.exports = app; //Exports app for use of other files