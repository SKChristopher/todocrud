const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoItem = new Schema({
  item: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model("Todo", todoItem);
module.exports = Todo;
