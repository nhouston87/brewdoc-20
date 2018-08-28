const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YeastSchema = new Schema({
  userid = {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  yeasttype: {
    type: String
  },
  floc: {
    type: Number
  },
  notes: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('yeasts', YeastSchema);