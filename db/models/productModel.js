const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE = "products";

// {
//   "productName": "LAVARROPAS AUTOMATICO WHIRLPOOL",
//   "price": 59999,
//   "thumbnail": "http://medias.musimundo.com/medias/00317203-140724-140724-01-140724-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wzOTQxM3xpbWFnZS9qcGVnfGgxNC9oZmEvMTAzOTA4NDY3MDE1OTgvMDAzMTcyMDMtMTQwNzI0LTE0MDcyNF8wMS0xNDA3MjRfMDEuanBnX3NpemU1MTV8NjZhNjk4ZmI1ZTAzOGRjYzc4NzM2OTcyMmMzZTg0NGZjMTNmZTYxNjI2OTM5YWFhYWYwYjNiY2I3OGUyNGRmOQ",
//   "id": 2
// },

const ProductSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "product_name",
    unique: true,
  },
  price: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  thumbnail: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Product extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product", //lo dejo con el mismo nombre de la clase
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
