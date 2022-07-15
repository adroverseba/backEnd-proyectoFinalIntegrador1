const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const boom = require("@hapi/boom");
const mongoose = require("mongoose");
const cartModel = require("../db/models/cartModel");

class CartService {
  constructor() {}

  async createCart() {
    const id = uuidv4();
    const cartToSave = new cartModel({
      _id: id,
      timestamp: Date.now(),
      productos: [],
    });
    await cartToSave.save();
    return { id };
  }

  deleteById(id) {
    const cartList = JSON.parse(
      fs.readFileSync(`./services/${this.fileName}.json`, "utf-8")
    );
    const cartIndex = cartList.findIndex((prod) => prod.id == id);
    if (cartIndex == -1) {
      throw boom.notFound("cart not found");
    }
    cartList.splice(cartIndex, 1);
    fs.writeFileSync(
      `./services/${this.fileName}.json`,
      JSON.stringify(cartList, null, 2)
    );
    return cartList;
  }

  async getProductsCart(idCart) {
    const result = await cartModel.findOne({ _id: idCart });
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
    return result.products;
  }

  deleteProductCart(id, id_prod) {
    const read = JSON.parse(
      fs.readFileSync(`./services/${this.fileName}.json`, "utf-8")
    );
    const cartIndex = read.findIndex((prod) => prod.id == id);
    if (cartIndex == -1) {
      throw boom.notFound("cart not found");
    }
    const products = this.getProductsCart(id);
    const prodIndex = products.findIndex((prod) => prod.id == id_prod);
    if (prodIndex == -1) {
      throw boom.notFound("product not found");
    }
    products.splice(prodIndex, 1);
    read[cartIndex].productos = products;
    fs.writeFileSync(
      `./services/${this.fileName}.json`,
      JSON.stringify(read, null, 2)
    );
    return read;
  }
}

module.exports = CartService;
