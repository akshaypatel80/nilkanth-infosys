const express = require("express");
const CartItem = require("../model/cart.model");
const { User } = require("../model/user.model");
const Product = require("../model/product.model");
const Router = express.Router();
const createProduct = async (req, res) => {
  const userId = req.params.userId;
  let product = await Product.findById(req.body.product);
  let user = await User.findById({ _id: userId });
  let cart = user.cartitem;
  try {
    if (x) {
      res.status(200).send({ msg: "all redy" });
      console.log(cart);
    } else {
      await Product.findByIdAndUpdate(product._id, {
        Quantity: product.Quantity - req.body.Quantity,
      });
      cart = [...cart, product];
      await User.findByIdAndUpdate({ _id: userId }, { cartitem: cart });
      res.status(200).json(req.body);
    }
  } catch (error) {
    res.status(200).json({ msg: "wrong" });
  }
};
const deleteProduct = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    // const savedproduct=await product.save();
    try {
      let user = await userModel.findById({ _id: userId });
      let cart = user.cartitem;
      console.log("this is from cart and this is old user:- ", user, cart);
      newcart = cart.filter((elem) => {
        return elem._id !== req.body._id;
      });
      await userModel.findByIdAndUpdate({ _id: userId }, { cartitem: newcart });
      let sameuser = await userModel.findById({ _id: userId });
      console.log("this is from cart and this is new user:- ", sameuser);
    } catch (error) {
      next(error);
    }
    res.status(200).json(req.body);
  } catch (error) {
    next(error);
  }
};
Router.post("/add/:userId", createProduct);
Router.delete("/delete/:userId", deleteProduct);
module.exports = Router;
