const express = require('express')
const router = require('./routes/router')
const cors = require('cors')
var cookieParser = require('cookie-parser')
require("./db/conn")

const app = express()
const port=8009;

//because we transfer data in form of json thats why include this
app.use(express.json());

//frontend and backend dono alg alg port pr run honge is liye cors ki jarurat h
app.use(cors());

app.use(router);

app.use(cookieParser())

// app.get('/',(req,res)=>{
// res.send('hello world')
// })

app.listen(port,()=>{
     console.log(`Example app listening on port ${port}`)
})
