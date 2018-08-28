const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KBArticleSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  number: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  tags: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  photo: [
    {
      src: {
        type: String
      }
    }
  ],
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
});

module.exports = mongoose.model("kbarticles", KBArticleSchema);
