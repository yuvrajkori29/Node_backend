const express = require('express');
const app = express();
const db = require('./database/db')
const Person = require('./models/person');
const MenuItem  = require('./models/menu');
const bodyParser = require('body-parser');
const routerMenu = require('./router/menuRouter');
const routerPerson = require('./router/personRouter');



app.use(bodyParser.json());  //carries data in body 

require('dotenv').config;

const PORT= process.env.PORT || 3000;




app.get('/',(req,res) =>{
          res.send("Welcome to my Hotel");
});

//perosnRouutes
app.use('',routerPerson);

//menuRoutes
app.use('',routerMenu);



app.listen(PORT,()=>{
    console.log("server is runnig on port:",PORT);
});



