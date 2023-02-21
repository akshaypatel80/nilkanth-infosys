const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const User = mongoose.model("user", userSchema);
module.exports = { User };
