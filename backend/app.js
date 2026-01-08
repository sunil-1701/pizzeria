const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Ingredients = require("./model/pizzaIngredient.model");
const PizzaMenu = require("./model/pizzaMenu.model");

const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = 6017;

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/api/pizzas", async (req, res) => {
  try {
    const allPizza = await PizzaMenu.find();
    res.status(201).json(allPizza);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.get("/api/ingredients", async (req, res) => {
  try {
    const allIngredients = await Ingredients.find();
    res.status(201).json(allIngredients);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
