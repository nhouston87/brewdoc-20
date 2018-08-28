const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekpickSchema = new Schema({
  kbarticle: {
    type: Schema.Types.ObjectId,
    ref: "kbarticles"
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "recipes"
  },
  batch: {
    type: Schema.Types.ObjectId,
    ref: "batches"
  },
  beer: {
    name: {
      type: String
    },
    pic: {
      type: String
    },
    review: {
      type: String
    }
  }
});

module.exports = mongoose.model("weekly", WeekpickSchema);
