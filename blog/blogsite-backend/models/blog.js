const mongoose = require("mongoose");
const conn = require("../config/db");

var blogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  blogId: String,
  userId: String,
  blogTitle: String,
  blogCategory: String,
  blogContent: String,
  isPublish: String,
});

let blog = conn.model("blog", blogSchema);
module.exports = blog;
