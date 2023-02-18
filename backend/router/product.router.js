const express = require("express");
const Product = require("../model/product.model");
const Router = express.Router();
const QueryFinder = require("../Utils/QueryFinder");
const adminAuth = require("../middleware/adminAuthMiddlewere");
const getAllProducts = async (req, res) => {
  try {
    const resPerPage = 10;
    const totalProduct = await Product.countDocuments();
    const apiFeature = new QueryFinder(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resPerPage)
      .sort();
    const products = await apiFeature.query;
    res.status(200).send({ success: true, products, totalProduct });
  } catch (error) {
    res.send({ error: error.message });
  }
};

const getSingleProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const totalProduct = await Product.findById({ _id: id });
    res.status(200).send({ success: true, totalProduct });
  } catch (error) {
    res.send({ error: error.message });
  }
};

Router.get("/get/all", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send({ product: product });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});
// delete Products into the database at url (http://localhost:8080/products/delete/id)

Router.delete("/delete/:id", adminAuth, async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "delete product successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

Router.patch("/update/:id", adminAuth, async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await Product.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ msg: "update product successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});
Router.post("/add", adminAuth, async (req, res) => {
  const loge = req.body;
  try {
    let data = new Product(loge);
    await data.save();
    res.status(200).send({ msg: "Product product added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});
Router.route("/").get(getAllProducts);
Router.route("/:id").get(getSingleProducts);
module.exports = Router;
