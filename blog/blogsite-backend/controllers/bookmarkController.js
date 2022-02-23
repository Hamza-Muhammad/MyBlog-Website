const Bookmark= require("../models/bookmark");

const bookmarkList = async (req, resp) => {
  let data = await Bookmark.find();
  resp.json(data);
};
const bookmarkid = async (req, resp) => {
  var query = { bookmarkId:123 };
  let datas = await Bookmark.find(query);
 resp.json(datas);
 
};



module.exports = {
  bookmarkList,
  bookmarkid,
};
