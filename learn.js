console.log("server is running");
var _ = require('lodash');

const objPerson  =  require('./first');
const res = objPerson.addNumber(objPerson.person.age,1);
console.log(res);

console.log(objPerson);

const obj = ["perosn",1,11,2,2,2,2,2];
console.log(_.uniq(obj));