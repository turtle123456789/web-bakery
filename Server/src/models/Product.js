const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
