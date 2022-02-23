const express = require("express");
const router = express.Router();
const blogCtrl = require("../controllers/blogController");

router.get("/", blogCtrl.blogid);

router.get("/list", blogCtrl.blogList);

router.get("/adminblogs", blogCtrl.adminBlogList);
router.get("/sports", blogCtrl.sportList);
router.get("/fashion", blogCtrl.fashionList);
router.get("/food", blogCtrl.foodList);
router.get("/music", blogCtrl.musicList);
router.get("/travel", blogCtrl.travelList);
router.get("/political", blogCtrl.politicalList);
router.get("/fitness", blogCtrl.fitnessList);
router.get("/entertainment", blogCtrl.entertainmentList);
router.get("/lifestyle", blogCtrl.lifestyleList);

router.post("/blogreject", function (req, res, next) {
  blogCtrl.blogRejectList(req.body);
});
router.post("/blogaccept", function (req, res, next) {
  blogCtrl.blogAcceptList(req.body);
});

router.post("/blogsubmitted", function (req, res, next) {
  blogCtrl.blogSubmittedList(req.body);
  // console.log(req.body);
});

// router.post("/edit", function (req, res, next) {
//   console.log(req.body);
// });
module.exports = router;
