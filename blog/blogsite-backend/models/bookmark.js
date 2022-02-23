const mongoose = require("mongoose");
const conn = require("../config/db");

var bookmarkSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookmarkId: String,
  userId: String,
  blogTitle: String,
  blogCategory:String,
  blogContent:String,
  userBookmark:Array,
  
});

let bookmark = conn.model("bookmark", bookmarkSchema);
module.exports = bookmark;
