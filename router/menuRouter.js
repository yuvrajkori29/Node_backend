const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');





//request for menu...

router.post('/createMenuItem',async (req,res)=>{
    try{
   const dataItem =  req.body;
   const newItem = MenuItem(dataItem);

   const savedItem = await newItem.save();

   res.status(200).send(savedItem);
} catch (error) {
   res.send(error).status(500);
}

})

router.get('/getMenuItem',async (req,res)=>{
    
         
      try {
       const menuData = await MenuItem.find();
       res.status(200).send(menuData)
      } catch (error) {
       res.send(error).status(500);
      }

});


router.get('/getMenuItem/:taste',async (req,res)=>{
    
         
    try {
        const tasteCheck = req.params.taste;

        if(tasteCheck == 'Sweet' || tasteCheck == 'Sour' || tasteCheck =='Spicy')
        {
            const taste  = await MenuItem.find({taste : tasteCheck});
            res.status(500).send(taste);

        }

        else 
        {
            const taste  = await MenuItem.find();
            res.status(500).send(taste);
        }

     
    } catch (error) {
     res.send(error).status(500);
    }

});

module.exports = router;
