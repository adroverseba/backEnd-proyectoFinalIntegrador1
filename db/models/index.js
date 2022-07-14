const { ProductSchema, Product } = require("./productModel");

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
