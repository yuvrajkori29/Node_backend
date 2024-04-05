const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({

   name :{
    type : String,
    required : true,
    unique : true
   },

   price : {
  type : Number,
  required : true 
   },

   taste : {
    type : String,
    enum : ['Sweet' , 'Spicy' ,'Sour'],
    required :true
   },

   isDrink : {
    type : Boolean,
    default :false
   },

   ingredients : {
    type : [String],
    default : []
   },

   numSales : {
    type : Number,
    default : 0
   }

    
});


const MenuItem = mongoose.model('MenuItem',menuSchema);

module.exports = MenuItem;