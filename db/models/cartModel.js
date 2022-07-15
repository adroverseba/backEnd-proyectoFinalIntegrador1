const mongoose = require("mongoose");

const cartsCollection = "Carts";

const productSchema = new mongoose.Schema({
  _id: { type: String, required: true, max: 50 },
  productName: { type: String, required: true, max: 75 },
  timestamp: { type: String, required: true, max: 75 },
  description: { type: String, required: true, max: 400 },
  code: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  thumbnail: { type: String, required: true, max: 100 },
});

const cartSchema = new mongoose.Schema({
  _id: { type: String, required: true, max: 50 },
  timestamp: { type: String, required: true, max: 50 },
  products: [productSchema],
});

const cartModel = new mongoose.model(cartsCollection, cartSchema);

module.exports = cartModel;
