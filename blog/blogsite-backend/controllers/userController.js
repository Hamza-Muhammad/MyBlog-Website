const Users = require("../models/users");

const userList = async (req, resp) => {
  let data = await Users.find();
  resp.json(data);
};

const userid = async (req, resp) => {
  var query = { userId:123 };
  let datas = await Users.find(query);
 resp.json(datas);
 
};


module.exports = {
  userList,
userid,
};

