const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {}
  async create(data) {
    const product = await models.Product.create(data);
    return product;
  }

  async find() {
    const products = await models.Product.findAll({
      include: ['category'],
    });
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, changes) {
    const toUpdate = await this.findOne(id);
    const finalData = await toUpdate.update(changes);
    return finalData;
  }

  async delete(id) {
    const toDelete = await this.findOne(id);
    toDelete.destroy();
    return { id };
  }
}

module.exports = ProductsService;
