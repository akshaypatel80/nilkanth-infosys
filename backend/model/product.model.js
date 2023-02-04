const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Thumbnail: String,
  Title: String,
  Price: Number,
  StrikePrice: Number,
  Description: String,
  Category: String,
  Subcategory: String,
  Quantity: Number,
  Onsale: String,
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
