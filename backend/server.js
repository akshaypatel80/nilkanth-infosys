require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const { connect } = require("./config/db");
app.use(express.json());
app.use(cors());

const userRouter = require("./router/user.router");
const productRouter = require("./router/product.router");
const cartRouter = require("./router/cart.router");
const adminRouter = require("./router/admin.router");
const reviewRouter = require("./router/review.router");
const orderRouter = require("./router/order.router");

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/admin", adminRouter);
app.use("/review", reviewRouter);
app.use("/order", orderRouter);

app.listen(port, async () => {
  try {
    await connect;
    console.log(`http://localhost:${port}`);
  } catch (error) {
    console.log("connection failed");
  }
});
