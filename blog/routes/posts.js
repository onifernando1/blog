var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Post = require("../models/post");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// POST - create a new post
router.post("/", (req, res) => {
  const post = new Post({
    id: uuidv4(),
    title: req.body.title,
    information: req.body.information,
    author: req.body.author,
  });

  return res.send([post]);
});

//PUT
router.put("/postId", (req, res) => {
  return res.send("PUT");
});

//DELETE
router.delete("/postId", (req, res) => {
  return res.send("DELETE");
});

module.exports = router;
