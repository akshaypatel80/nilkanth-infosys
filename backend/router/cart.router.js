const express = require("express");
const { User } = require("../model/user.model");
const Product = require("../model/product.model");
const Cart = require("../model/cart.model");
const userAuth = require("../middleware/userAuthMiddleware");
const cartRouter = express.Router();

const createProduct = async (req, res) => {
  try {
    const { Quantity } = req.body;
    let userId = await User.findById(req.body.userID);
    let product = await Product.findById(req.body.product);
    try {
      let cartItem = await Cart.findOne({ product });
      if (cartItem) {
        cartItem.Quantity += Quantity;
        await cartItem.save();
      } else {
        cartItem = new Cart({ product, Quantity, userId });
        await cartItem.save();
      }
      const remainingItems = await Cart.find({});
      const totalQuantity = remainingItems.reduce(
        (acc, item) => acc + item.Quantity,
        0
      );
      await Product.findByIdAndUpdate(product._id, {
        Quantity: product.Quantity - Quantity,
      });
      res.send({ message: "Item added to cart", totalQuantity });
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProduct = async (req, res) => {
  let userId = await User.findById(req.body.userID);
  try {
    const cartItems = await Cart.find(userId);
    if (!cartItems) {
      res.send("not");
    }
    const totalQuantity = cartItems.reduce(
      (acc, item) => acc + item.Quantity,
      0
    );
    res.status(200).send(cartItems);
  } catch (error) {
    res.status(400).send({ msg: "Something went wrong" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Cart.findOneAndDelete({ _id: id });
    if (!deletedItem) {
      res.status(400).send({ message: "product not found" });
    } else {
      const remainingItems = await Cart.find({});
      const totalQuantity = remainingItems.reduce(
        (acc, item) => acc + item.Quantity,
        0
      );
      res.send({ message: "Item deleted from cart", totalQuantity });
    }
  } catch (error) {
    res.status(400).send({ msg: "Something went wrong" });
  }
};
cartRouter.get("/get", getProduct);
cartRouter.post("/add", createProduct);
cartRouter.delete("/delete/:id", deleteProduct);
module.exports = cartRouter;
