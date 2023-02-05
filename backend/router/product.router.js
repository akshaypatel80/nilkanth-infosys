const express = require("express");
const Product = require("../model/product.model");
const Router = express.Router();
const QueryFinder = require("../Utils/QueryFinder");
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

Router.route("/").get(getAllProducts);

const getSingleProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const totalProduct = await Product.findById({ _id: id });
    res.status(200).send({ success: true, totalProduct });
  } catch (error) {
    res.send({ error: error.message });
  }
};

Router.route("/:id").get(getSingleProducts);
module.exports = Router;
