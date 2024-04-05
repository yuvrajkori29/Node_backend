const mongoose = require('mongoose');

const PersonSchema  = new mongoose.Schema({

name :{
    type : String,
    required : true
},

age : {
    type : Number
},

mobile :{
type : String,
required : true
},

work :{
    type : String,
    enum : ['chef', 'manager' , 'waiter'],
    required : true
},

email : {
    type : String,
    required : true,
    unique : true
},

address :{
    type : String
},

salary : {
    type: Number,
    required : true
}


});




const Person =  mongoose.model('userModel',PersonSchema);

module.exports = Person;