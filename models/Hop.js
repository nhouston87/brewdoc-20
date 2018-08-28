const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HopSchema = new Schema({
  userid = {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  alpha: {
    type: Number
  },
  beta: {
    type: Number
  },
  hoptype: {
    type: String
  },
  notes: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("hops", HopSchema);
