const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BatchSchema = new Schema({
  recipeid: {
    type: Schema.Types.ObjectId,
    ref: "recipes"
  },
  name: {
    type: String,
    required: true
  },
  modifications: {
    type: String
  },
  privacy: {
    type: String,
    required: true
  },
  pickable: {
    type: Boolean
  },
  votes: {
    type: Number
  },
  brewday: {
    type: Date
  },
  mashstart: {
    type: Date
  },
  mashend: {
    type: Date
  },
  mashnotes: {
    type: String
  },
  spargetemp: {
    type: Number
  },
  spargetype: {
    type: String
  },
  spargestart: {
    type: Date
  },
  spargeend: {
    type: Date
  },
  boilstart: {
    type: Date
  },
  hopaddition: [
    {
      hopadded: {
        type: String
      },
      timeadded: {
        type: Date
      }
    }
  ],
  boilend: {
    type: Date
  },
  boilnotes: {
    type: String
  },
  coolstart: {
    type: Date
  },
  coolend: {
    type: Date
  },
  coolnotes: {
    type: String
  },
  actualog: {
    type: Number
  },
  fermstart: {
    type: Date
  },
  fermend: {
    type: Date
  },
  actualfg: {
    type: Number
  },
  fermnotes: {
    type: String
  },
  condstart: {
    type: Date
  },
  condend: {
    type: Date
  },
  condnotes: {
    type: String
  },
  carbstart: {
    type: Date
  },
  carbend: {
    type: Date
  },
  carbnotes: {
    type: String
  },
  stage: {
    type: String
  }
});

module.exports = mongoose.model("batches", BatchSchema);
