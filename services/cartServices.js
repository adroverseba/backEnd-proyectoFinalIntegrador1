const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const boom = require("@hapi/boom");
// const mongoose = require("mongoose");
const cartModel = require("../db/models/cartModel");

class CartService {
  constructor() {}

  async createCart() {
    const id = uuidv4();
    const cartToSave = new cartModel({
      _id: id,
      timestamp: Date.now(),
      products: [],
    });
    await cartToSave.save();
    return { id };
  }

  async deleteById(idCart) {
    const result = await cartModel.findOne({ _id: idCart });
    if (!result) {
      throw boom.notFound("Cart not Found");
    }
    await cartModel.deleteOne({ _id: idCart });
    return { idCart };
  }

  async getProductsCart(idCart) {
    const result = await cartModel.findOne({ _id: idCart });
    // const result = await model.cartModel.updateOne
    if (!result) {
      throw boom.notFound("Cart not Found");
    }
    if (result.products.length == 0) {
      return { message: "the cart is empty" };
    }
    const product = result.products;
    return product;
  }

  async addProductCart(idCart, product) {
    const result = await cartModel.findOne({ _id: idCart });
    if (!result) {
      throw boom.notFound("cart not found");
    }
    await cartModel.updateOne(
      { _id: idCart },
      { $push: { products: product } }
    );
    return product;
  }

  async deleteProductCart(idCart, id_prod) {
    const result = await cartModel.findOne({ _id: idCart });
    if (!result) {
      throw boom.notFound("cart not found");
    }
    if (result.products.length == 0) {
      throw boom.notFound("products not found");
    }
    const rta = await cartModel.updateOne(
      { _id: idCart },
      {
        $pull: { products: { id: id_prod } },
      }
    );
    return rta;
  }
}

module.exports = CartService;
