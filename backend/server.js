require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const { connect } = require("./config/db");
app.use(express.json());
app.use(cors());

const userRouter = require("./router/user.router");

app.use("/user", userRouter);

app.listen(port, async () => {
  try {
    await connect;
    console.log(`htttp://localhost:${port}`);
  } catch (error) {
    console.log("connection failed");
  }
});
