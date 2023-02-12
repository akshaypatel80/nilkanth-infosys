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

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.listen(port, async () => {
  try {
    await connect;
    console.log(`http://localhost:${port}`);
  } catch (error) {
    console.log("connection failed");
  }
});
