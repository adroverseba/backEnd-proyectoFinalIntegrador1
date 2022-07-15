const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ProductService {
  constructor() {}

  async save(product) {
    const newProduct = await models.Product.create(product);
    return newProduct;
  }

  async getById(id) {
    const rta = await models.Product.findByPk(id);
    if (!rta) {
      throw boom.notFound("product not found");
    }
    return rta;
  }

  async deleteById(id) {
    const product = await this.getById(id);
    await product.destroy();
    return { id };
  }

  // async deleteAll() {
  //   const products = this.getAll();
  //   return await products.destroy();
  // }

  async getAll() {
    const rta = await models.Product.findAll();
    return rta;
  }

  async update(id, product) {
    const read = JSON.parse(
      await fs.promises.readFile(`./services/${this.fileName}.json`, "utf-8")
    );
    const productIndex = read.findIndex((prod) => prod.id == id);
    if (productIndex == -1) {
      throw new Error();
    }
    read[productIndex] = product;
    await fs.promises.writeFile(
      `./services/${this.fileName}.json`,
      JSON.stringify(read, null, 2)
    );
    return read[id - 1];
  }

  async modifyById(id, changes) {
    const product = await this.getById(id);
    const rta = await product.update(changes);
    return rta;
  }
}

module.exports = ProductService;
