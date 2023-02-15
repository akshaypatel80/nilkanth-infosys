require("dotenv").config();
const express = require("express");
const bcyrpt = require("bcrypt");
const { User } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const key = process.env.userKEY;

Router.post("/user-singnup", async (req, res) => {
  const { email, password, first_name, last_name, mobile } = req.body;
  try {
    bcyrpt.hash(password, 4, async (err, secure_password) => {
      if (err) {
        console.log(err);
      } else {
        const user = new User({
          email,
          password: secure_password,
          first_name,
          last_name,
          mobile,
        });
        await user.save();
        res.status(200).send({ msg: "signup successfully" });
      }
    });
  } catch (error) {
    res.status(500).send({ msg: "Wrong credentials" });
  }
});

Router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email });
    const hase_pass = user[0].password;

    if (user.length > 0) {
      bcyrpt.compare(password, hase_pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, key);
          res.send({ msg: "login successfull", token: token, user: user });
        } else {
          res.status(400).send({ msg: "wrong credntials" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "wrong credntials" });
  }
});

module.exports = Router;
