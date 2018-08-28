const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrainSchema = new Schema({
  userid = {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  srm: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number
  },
  style: {
    type: String
  },
  origin: {
    type: String
  },
  gravity: {
    type: Number
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("grains", GrainSchema);
