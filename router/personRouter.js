const express = require('express');
const router = express.Router();
const Person= require('../models/person');

//request  for person ....
        
router.post('/Person',async (req,res)=>{

    try {
        const data = req.body;  //we are accessing data 
    const newPerson = new Person(data);
    

    const savedPerson = await newPerson.save();

    res.status(200).send(savedPerson);  
    } catch (error) {
        res.send(error).status(500);
    }



})

router.get('/getPerson',async(req,res)=>{
    try {
        const personDetails = await Person.find();
        res.status(200).send(personDetails);
    } catch (error) {
        res.send(error).status(500);
    }

});

router.get('/getPersonEmail', async (req, res) => {
    try {
        const email = "johndoe@example.com";
        let personDetails;

        if (email) {
            // If email is provided, find by email
            personDetails = await Person.find({ email: email });
        } else {
            // If email is not provided, get all persons
            personDetails = await Person.find();
        }

        res.status(200).send(personDetails);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/getPerson/:work', async (req, res) => {
    try {
        const work = req.params.work;
        let personWorkType;

        if (work == 'chef' || work == 'manager' || work == 'waiter') {
            // If email is provided, find by email
            personWorkType = await Person.find({ work: work });
        } else {
            // If email is not provided, get all persons
            personWorkType = await Person.find();
        }

        res.status(200).send(personWorkType);
    } catch (error) {
        res.status(500).send(error);
    }
});


//update request 

router.put('/updatePerson/:id',async (req,res)=>{

    try {
        
    
          
     const personId = req.params.id;
     const updatedPerson = req.body;

     const findPerson = await Person.findByIdAndUpdate(personId,updatedPerson,{
                  new  : true,
                  runValidators : true
     });

     if(!findPerson)
     {
        res.send("Person Not Found........ !");
     }

     console.log("data is updated");
     res.status(200).json(findPerson);
    }
     catch(error){
            res.status(500).send("Error",error);
     }
})


//delete
router.delete('/deletePerson/:id',async (req,res)=>{
    try {
        const personId = req.params.id;
        const findPerson  = await Person.findByIdAndDelete(personId);

        if(!findPerson)
          {
            res.send("could not able to find that person");
          }

        else
         res.send("person deleted"); 
        
    } catch(error){
        res.status(500).send("Error",error);
 }
})

module.exports = router;