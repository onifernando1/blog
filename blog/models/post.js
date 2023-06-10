const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String },
  information: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
