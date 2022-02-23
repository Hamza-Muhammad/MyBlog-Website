const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");
const mongoose = require("mongoose");
const User= require("../models/users");


router.get("/", userCtrl.userid);

router.get("/list", userCtrl.userList);








//   const{userName,userPassword,userEmail}=req.body;
//   const User=new users({
    
    
//     userName,
//     userPassword,
//     userEmail

//   })
//  User.save().
//  then(User=>{
//    res.json({message:"done"})
//  }) 
//  .catch(err=>{
//    console.log(err)
//  })
  
    
    
  
//  var myData = new User(req.body);
  
  
//   myData.save()
//     .then(myData => {
//       res.status(200).json({'myData': 'added'});
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
  
module.exports = router;
