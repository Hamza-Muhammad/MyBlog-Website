const { ObjectId } = require("mongodb");
const Blog = require("../models/blog");
const { collection, db } = require("../models/blog");

const blogSubmittedList = async (req, resp) => {
  let combineddata = { ...req.blog, userEmail: req.userEmail };
  console.log(combineddata);
  db.collection("blogs").insertOne(combineddata, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
};
const blogList = async (req, resp) => {
  let userviewdata = await Blog.find({ isPublish: "true" });
  console.log(userviewdata);
  resp.json(userviewdata);
};

const blogRejectList = async (req, resp) => {
  let id = req._id;
  console.log(id);
  db.collection("blogs").deleteOne({ _id: ObjectId(id) }, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close;
  });
};

const blogAcceptList = (req, resp) => {
  let id = req._id;
  console.log(id);
  let data = { $set: { isPublish: "true" } };
  console.log(data);
  // db.collection("blogs").updateOne(
  //   id,
  //   data, }
  // );
  db.collection("blogs").updateOne(
    { _id: ObjectId(id) },
    data,
    function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    }
  );
};

const adminBlogList = async (req, resp) => {
  let data = await Blog.find({ isPublish: "false" });
  console.log(data);
  resp.json(data);
};

const sportList = async (req, resp) => {
  let data = await Blog.find();
  let sportsdata = [];
  data.forEach((item) => {
    if (item.blogCategory == "sports") {
      sportsdata.push(item);
    }
  });
  resp.json(sportsdata);
};
const entertainmentList = async (req, resp) => {
  let data = await Blog.find();
  let entertainmentdata = [];
  data.forEach((item) => {
    if (item.blogCategory == "entertainment") {
      entertainmentdata.push(item);
    }
  });
  resp.json(entertainmentdata);
};
const lifestyleList = async (req, resp) => {
  let data = await Blog.find();
  let lifestyledata = [];
  data.forEach((item) => {
    if (item.blogCategory == "lifestyle") {
      lifestyledata.push(item);
    }
  });
  resp.json(lifestyledata);
};
const politicalList = async (req, resp) => {
  let data = await Blog.find();
  let politicaldata = [];
  data.forEach((item) => {
    if (item.blogCategory == "political") {
      politicaldata.push(item);
    }
  });
  resp.json(politicaldata);
};
const fashionList = async (req, resp) => {
  let data = await Blog.find();
  let fashiondata = [];
  data.forEach((item) => {
    if (item.blogCategory == "fashion") {
      fashiondata.push(item);
    }
  });
  resp.json(fashiondata);
};
const fitnessList = async (req, resp) => {
  let data = await Blog.find();
  let fitnessdata = [];
  data.forEach((item) => {
    if (item.blogCategory == "fitness") {
      fitnessdata.push(item);
    }
  });
  resp.json(fitnessdata);
};
const musicList = async (req, resp) => {
  let data = await Blog.find();
  let musicdata = [];
  data.forEach((item) => {
    if (item.blogCategory == "music") {
      musicdata.push(item);
    }
  });
  resp.json(musicdata);
};
const foodList = async (req, resp) => {
  let data = await Blog.find();
  let fooddata = [];
  data.forEach((item) => {
    if (item.blogCategory == "food") {
      fooddata.push(item);
    }
  });
  resp.json(fooddata);
};
const travelList = async (req, resp) => {
  let data = await Blog.find();
  let traveldata = [];
  data.forEach((item) => {
    if (item.blogCategory == "travel") {
      traveldata.push(item);
    }
  });
  resp.json(traveldata);
};

const blogid = async (req, resp) => {
  var query = { blogId: 123 };
  let datas = await Blog.find(query);
  resp.json(datas);
};

module.exports = {
  blogList,
  blogid,
  sportList,
  entertainmentList,
  foodList,
  fitnessList,
  fashionList,
  travelList,
  musicList,
  politicalList,
  lifestyleList,
  adminBlogList,
  blogAcceptList,
  blogRejectList,
  blogSubmittedList,
};
