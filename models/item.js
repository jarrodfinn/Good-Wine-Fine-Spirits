const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  //name of wine
  name: { type: String, required: true },
  //type of wine (red, white, sparkling, rose, orange, fortified)
  category: { type: String, required: true },
  // name of the grape
  varietal: { type: String, required: true },
  // name of the continent
  origin: { type: String, required: true },
  // name of the country of origin
  country: { type: String, required: true },
  // name of the region of the country of origin
  region: { type: String, required: true },
  // price in US dollars
  price: { type: Number, required: true},
  // The amount of bottles going into inventory
  inventory: { type: Number, required: true},
  // description of the wine
  description: { type: String, required: true },
  ///image for the wine
  photo: {type: String}

},
{ timestamps: true});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
