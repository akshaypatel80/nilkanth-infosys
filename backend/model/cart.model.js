const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
 productID: mongoose.Schema.Types.ObjectId,
  Thumbnail: String,
  Title: String,
  Price: Number,
  StrikePrice: Number,
  Description: String,
  Category: String,
  Subcategory: String,
  Quantity: { type: Number, default: 1 },
  Onsale: String,
  rating: Number,
  userID: String,
});
const CartItem = mongoose.model("cartItem", cartItemSchema);
module.exports = CartItem;
