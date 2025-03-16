const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const pahtlocation = path.resolve();
const finalpath = path.join(pahtlocation,'./index.html');

app.get('/home',(req,res)=>{
    res.sendFile(finalpath)
});

app.get('/test',(req,res)=>{
    res.status(200).json({success:true,message:"Tested successfully"})
});

app.post('/register',(req,res)=>{
    console.log('register data >>>>',req.body)
});

module.exports = app;
