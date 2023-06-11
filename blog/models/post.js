const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String },
  information: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

// module.exports = Post;
module.exports = mongoose.model("Post", Post);
