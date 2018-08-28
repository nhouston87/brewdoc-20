const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  privacy: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  pic: {
    type: String
  },
  brewlevel: {
    type: String,
    required: true
  },
  experince: [
    {
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      notes: {
        type: String
      },
      datefrom: {
        type: Date,
        required: true
      },
      dateto: {
        type: Date
      },
      current: {
        type: Boolean
      }
    }
  ],
  photos: [
    {
      src: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      share: {
        type: String,
        default: "friends"
      }
    }
  ],
  friends: [
    {
      friendhandle: {
        type: String,
        required: true
      },
      dateadded: {
        type: Date,
        default: Date.now
      },
      mute: {
        type: Boolean,
        default: false
      }
    }
  ]
});

module.exports = mongoose.model("profile", ProfileSchema);
