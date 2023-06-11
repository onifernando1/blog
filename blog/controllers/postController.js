const Post = require("../models/post");
const asyncHandler = require("express-async-handler");

//Show all posts

exports.post_list = asyncHandler(async (req, res, next) => {
  res.send("POST LIST");
});

// Show specific post

exports.post_detail = asyncHandler(async (req, res, next) => {
  res.send(`Author detail ${req.params.id}`);
});

// Post create form

exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.send("Author create GET");
});

// Create post on POST
exports.post_create_post = asyncHandler(async (req, res, next) => {
  res.send("Create post POST");
});

//Display delete form on GET
exports.post_delete_get = asyncHandler(async (req, res, next) => {
  res.send("delete post form GET");
});

// Handle delete on POST
exports.post_delete_post = asyncHandler(async (req, res, next) => {
  req.send("delete post POST");
});

// Display Author update form on GET.
exports.post_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: post update GET");
});

// Handle Author update on POST.
exports.post_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: post update POST");
});
