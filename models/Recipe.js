const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 5
  },
  description: {
    type: String
  },
  recipetype: {
    type: Number
  },
  size: {
    type: Number
  },
  og: {
    type: Number
  },
  fg: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  dateupdated: {
    type: Date
  },
  created: {
    type: Number
  },
  privacy: {
    type: Number
  },
  pickable: {
    type: Boolean
  },
  votes: {
    type: Number
  },
  grains: [
    {
      grainid: {
        type: Schema.Types.ObjectId,
        ref: "grains"
      },
      amount: {
        type: Number
      }
    }
  ],
  hops: [
    {
      hopid: {
        type: Schema.Types.ObjectId,
        refs: "hops"
      },
      amount: {
        type: Number
      },
      time: {
        type: Number
      }
    }
  ],
  yeast: [
    {
      yeastid: {
        type: Schema.Types.ObjectId,
        ref: "yeasts"
      },
      amount: {
        type: Number
      }
    }
  ],
  mash: {
    type: Schema.Types.ObjectId,
    ref: "mashes"
  },
  boil: {
    type: Schema.Types.ObjectId,
    ref: "boils"
  },
  ferm: {
    type: Schema.Types.ObjectId,
    ref: "ferms"
  }
});

module.exports = mongoose.model("recipes", RecipeSchema);
