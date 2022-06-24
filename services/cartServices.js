const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

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

  getProductsCart(idCart) {
    try {
      const cartList = JSON.parse(
        fs.readFileSync(`./services/${this.fileName}.json`, "utf-8")
      );
      const cartIndex = cartList.findIndex((cart) => cart.id == idCart);
      const product = cartList[cartIndex].productos;
      return product;
    } catch (error) {}
  }

  addProductCart(idCart, product) {
    try {
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
    } catch (error) {
      throw new Error("ha ocurrido un error: " + error);
    }
  }

  deleteById(id) {
    const cartList = JSON.parse(
      fs.readFileSync(`./services/${this.fileName}.json`, "utf-8")
    );
    const cartIndex = cartList.findIndex((prod) => prod.id == id);
    if (cartIndex == -1) {
      // throw boom.notFound("product not found");
    }
    cartList.splice(cartIndex, 1);
    fs.writeFileSync(
      `./services/${this.fileName}.json`,
      JSON.stringify(cartList, null, 2)
    );
    return cartList;
  }
}

module.exports = Cart;
