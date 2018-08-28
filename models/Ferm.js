const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FermSchema = new Schema({
  userid = {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  stage: [
    {
      name: {
        type: String,
        required: true
      },
      time: {
        type: Number,
        required: true
      },
      temp: {
        type: Number,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ferms', FermSchema);