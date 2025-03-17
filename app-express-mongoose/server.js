const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const PORT = process.env.PORT || 3000;

const UserRoutes=require('./routes/user.routes')
app.use('/users',UserRoutes)
  


const AuthRoutes= require('./routes/auth.routes')
app.use('/auth',AuthRoutes)

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('connected to mongo db')}).catch((err)=>{console.log(err)})



app.listen(PORT,()=>{console.log('server runninig onport localhost:5000')});