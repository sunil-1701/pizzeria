const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  iname: {
    type: String,
    required: true,
  },
});

const toppingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  tname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const pizzaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["veg", "nonveg"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [ingredientSchema],
  topping: [toppingSchema],
});
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
