const express = require("express");
const CartItem = require("../model/cart.model");
const Ordermodel = require("../model/order.model");
const adminAuth = require("../middleware/adminAuthMiddlewere");
const orderRouter = express.Router();

orderRouter.post("/add", async (req, res) => {
  const userid = req.body.userid;
  try {
    const cart = await CartItem.find({ user: userid });

    let OrdersData = cart.map((e) => {
      return { product: e.product._id, user: userid };
    });

    await Ordermodel.insertMany(OrdersData);
    await CartItem.deleteMany({ user: userid });
    res.status(200).send({ msg: "Order successfull" });
  } catch (err) {
    res.status(404).send({ "msg by order ": err.message });
  }
});

orderRouter.get("/:id", async (req, res) => {
  const userid = req.params.id;
  try {
    const orders = await Ordermodel.find({ user: userid }).populate("product");
    res.status(200).send(orders);
  } catch (err) {
    res.status(404).send({ msg: err.message });
  }
});

orderRouter.patch("/status/:OrderId", adminAuth, async (req, res) => {
  const Orderid = req.params.OrderId;
  const status = req.body.status;

  try {
    const orderStatus = await Ordermodel.findOneAndUpdate(
      { _id: Orderid },
      { status: status }
    );
    res.status(200).send({ msg: "Order Status Updated" });
  } catch (err) {
    res.status(404).send({ msg: err.message });
  }
});

orderRouter.get("/", adminAuth, async (req, res) => {
  let { limit = 10, page = 1 } = req.query;
  try {
    const orders = await Ordermodel.find({})
      .populate(["user", "product"])
      .limit(limit)
      .skip((page - 1) * limit);
    const orderscount = await Ordermodel.countDocuments();
    res.status(200).send({ orders: orders, count: orderscount });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

orderRouter.delete("/delete/:id", adminAuth, async (req, res) => {
  const id = req.params.id;
  try {
    await Ordermodel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "delete product successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

module.exports = orderRouter;
