const express = require("express");
const { User } = require("../model/user.model");
const Product = require("../model/product.model");
const Cart = require("../model/cart.model");
const userAuth = require("../middleware/userAuthMiddleware");
const cartRouter = express.Router();

const createProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.body.product);
    let userId = await User.findById(req.body.userID);
    let cart = await Cart.findOne({ _id: req.params.id, user: userId });
    if (product.Quantity < req.body.Quantity) {
      res.status(400).send("Not enough quantity available");
      return;
    }

    await Cart.findByIdAndUpdate(cart._id, { Quantity: req.body.Quantity });
    await Product.findByIdAndUpdate(product._id, {
      Quantity: product.Quantity - (req.body.Quantity - cart.Quantity),
    });
    res.send("Quantity updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
cartRouter.post("/add", createProduct);
module.exports = cartRouter;
