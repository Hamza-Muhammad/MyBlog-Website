const mongoose = require("mongoose");
const conn = require("../config/db");

var userSchema = new mongoose.Schema({
  
 
  userId:String,
  userName: String,
  userEmail: String,
  userPassword: String
});

let users = conn.model("users", userSchema);
module.exports=users;
