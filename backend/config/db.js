require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set({ strictQuery: false });
const url = process.env.mongoURL;
const connect = mongoose.connect(url);
module.exports = { connect };
