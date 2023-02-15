const express = require("express");
const { User } = require("../model/user.model");
const Product = require("../model/product.model");
const Cart = require("../model/cart.model");
const userAuth = require("../middleware/userAuthMiddleware");
const cartRouter = express.Router();
//add to cart
const createProduct = async (req, res) => {
  const userid = req.body.userid;
  const productid = req.body.product;
  const Quantity = req.body.Quantity;
  let product = await Product.findById(productid);
  try {
    const exist = await Cart.findOne({ product: productid, user: userid });
    if (exist?._id !== undefined) {
      res.status(400).send({ msg: "Product already in cart" });
    } else {
      try {
        const newItem = await Cart({ ...req.body, user: userid });
        await newItem.save();
        await Product.findByIdAndUpdate(product._id, {
          Quantity: product.Quantity - Quantity,
        });
        res.status(200).send({ msg: "Successfully add" });
      } catch (err) {
        res.status(404).send({ msg: err.message });
      }
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
};
// get cart product
const getProduct = async (req, res) => {
  const userid = req.params.userid;
  try {
    const cartData = await Cart.find({ user: userid }).populate("product");
    res.status(200).send({ cartData: cartData });
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
};

// delete cart product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Cart.findOneAndDelete({ _id: id });
    res.status(200).send({ msg: "Deleted Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong" });
  }
};
// update Quntity
const updateQuntity = async (req, res) => {
  const cartitem = req.params.cartid;
  const Quantity = req.body.Quantity || 1;
  const productid = req.body.product;
  let product = await Product.findById(productid);
  try {
    const UpdatedQuantity = await Cart.findOneAndUpdate(
      { _id: cartitem },
      { Quantity }
    );
    await Product.findByIdAndUpdate(product._id, {
      Quantity: product.Quantity - Quantity,
    });
    res.status(200).send({ msg: "Updated", UpdatedQuantity });
  } catch (err) {
    res.status(404).send({ msg: err.message });
  }
};

cartRouter.get("/get/:userid", getProduct);
cartRouter.post("/add", userAuth, createProduct);
cartRouter.delete("/delete/:id",userAuth, deleteProduct);
cartRouter.patch("/update/:cartid", userAuth, updateQuntity);
module.exports = cartRouter;
