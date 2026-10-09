const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
  phone: {
    type: String,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
