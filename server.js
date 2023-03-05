//import express
const express=require('express')
const connectdb=require('./config/connectdb')
// inisialisation de notre server
const app=express()

//create server
require('dotenv').config()
const port=process.env.PORT
connectdb()
app.use(express.json())
app.use('/product',require('./routes/prod'))
app.listen(port,(err)=>
    (err)?console.log(err):console.log('server is runing'+port))