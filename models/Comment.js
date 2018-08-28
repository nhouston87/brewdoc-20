const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  postid: {
    type: Schema.Types.ObjectId,
    ref: "posts"
  },
  body: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("comments", CommentSchema);
