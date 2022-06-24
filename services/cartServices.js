const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const boom = require("@hapi/boom");

class Cart {
  constructor(fileName) {
    this.fileName = fileName;
  }

  createCart() {
    try {
      const cartList = JSON.parse(
        fs.readFileSync(`./services/${this.fileName}.json`, "utf-8")
      );
      const newCart = {
        id: uuidv4(),
        timestamp: Date.now(),
        productos: [],
      };
      cartList.push(newCart);
      fs.writeFileSync(
        `./services/${this.fileName}.json`,
        JSON.stringify(cartList, null, 2)
      );
      return newCart.id;
    } catch (error) {
      console.log(error);
    }
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

  getProductsCart(idCart) {
    const cartList = JSON.parse(
      fs.readFileSync(`./services/${this.fileName}.json`, "utf-8")
    );
    const cartIndex = cartList.findIndex((cart) => cart.id == idCart);
    if (cartIndex == -1) {
      throw boom.notFound("Product not Found");
    }
    const product = cartList[cartIndex].productos;
    return product;
  }

  addProductCart(idCart, product) {
    const cartList = JSON.parse(
      fs.readFileSync(`./services/${this.fileName}.json`, "utf-8")
    );
    const cartIndex = cartList.findIndex((cart) => cart.id === idCart);
    product.timestamp = Date.now();
    cartList[cartIndex].productos.push(product);
    fs.writeFileSync(
      `./services/${this.fileName}.json`,
      JSON.stringify(cartList, null, 2)
    );
    return cartList;
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

module.exports = Cart;
