const express = require("express");
const router = express.Router();
const bookmarkCtrl = require("../controllers/bookmarkController");

router.get("/", bookmarkCtrl.bookmarkid);

router.get("/list", bookmarkCtrl.bookmarkList);

router.post("/edit", function (req, res, next) {
  console.log(req.body);
  
});
module.exports = router;
