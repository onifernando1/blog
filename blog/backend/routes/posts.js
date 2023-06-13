var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Post = require("../models/post");
const postController = require("../controllers/postController");

// // POST - create a new post
// router.post("/", (req, res) => {
// const post = new Post({
//   id: uuidv4(),
//   title: req.body.title,
//   information: req.body.information,
//   author: req.body.author,
// });

//   return res.send([post]);
// });

// SHOW ALL POSTS
router.get("/", postController.post_list);

// GET request for creating a post. (NOTE This must come before routes that display Book (uses id).)
router.get("/create", postController.post_create_get);

//POST request to create post
router.post("/create", postController.post_create_post);

//GET request to delete post form
router.get("/:id/delete", postController.post_delete_get);

//POST request to handle delete post
router.post("/:id/delete", postController.post_delete_post);

//GET request to update post
router.get(":id/update", postController.post_update_get);

//POST request to update post
router.post(":id/update", postController.post_update_post);

//GET request for one post
router.get(":/id", postController.post_detail_get);

module.exports = router;
