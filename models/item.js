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
  counrty: { type: String, required: true },
  // name of the region of the country of origin
  region: { type: String, required: true },
  // description of the wine
  // description: { type: String, required: true },
  // price in US dollars
  price: Number,
  // Is the item in stock
  inStock: Boolean,
  // date item was added to the inventory
  date: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
