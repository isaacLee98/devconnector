const { response } = require("express");
const express = require("express");
const router = express.Router();

//@route GET api/posts
//@desc Test route
//@access Public
router.get("/", (req, res) => {
  res.send("Posts router");
});

module.exports = router;