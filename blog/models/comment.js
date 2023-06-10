const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  information: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
});
