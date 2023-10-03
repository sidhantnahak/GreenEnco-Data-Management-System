const express = require('express');
const app = express();
const cors=require('cors')
const bodyparser=require('body-parser')
const data=require('./DataHandler/dataController');
require('dotenv').config({path:'./config.env'})


app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/api/v1',data)

module.exports = app