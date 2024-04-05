const { Db } = require('mongodb');
const  mongoose = require('mongoose');
require('dotenv').config();

const url  = process.env.DB_URL;
mongoose.connect(url);

const db= mongoose.connection;

db.on('connected' , ()=>{
    console.log("Connected");
})


db.on('error' , ()=>{
    console.log("error");
})

db.on('disconnected' , ()=>{
    console.log("disConnected");
})


module.exports  = db;
