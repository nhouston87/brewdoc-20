const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MashSchema = new Schema({
  userid = {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  step: [
    {
      name: {
        type: String,
        required: true
      },
      temp: {
        type: Number,
        required: true
      },
      time: {
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

module.exports = mongoose.model('mashes', MashSchema);