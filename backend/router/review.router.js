const express = require("express");
const reviewRouter = express.Router();
const { reviewModel } = require("../model/review.model");

reviewRouter.post("/", async (req, res) => {
  try {
    let { productId, userId, comment } = req.body;
    if (!productId || !userId || !comment) {
      res.status(404).send({ msg: "Sorry! You Have to Login First" });
    }

    let reviewData = await reviewModel.create({ comment, productId, userId });
    res.send({ msg: "Thank you for your Review!", reviewData });
  } catch (error) {
    res.status(500).send({ msg: "Somthing wen't Wrong" });
  }
});

reviewRouter.get("/:productId", async (req, res) => {
  try {
    let productId = req.params.productId;
    let reviewData = await reviewModel.find({ productId }).populate("userId");
    res.send(reviewData);
  } catch (error) {
    res.status(500).send({ msg: "Somthing wen't Wrong" });
  }
});

module.exports = reviewRouter;
