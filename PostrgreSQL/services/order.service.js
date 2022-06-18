const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrderService {
  constructor() {}
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }
  async find() {
    const order = await models.Order.findAll();
    return order;
  }
  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }
  async findOne(id) {
    const costumer = await models.Order.findByPk(id, {
      include: [{ association: 'customer', include: ['user'] }, 'items'],
    });
    if (!costumer) {
      throw boom.notFound('Order not found');
    }
    return costumer;
  }
  async update(id, changes) {
    const toUpdate = await this.findOne(id);
    const finalData = toUpdate.update(changes);
    return finalData;
  }

  async delete(id) {
    const toDeleted = await this.findOne(id);
    await toDeleted.destroy();
    return id;
  }
}

module.exports = OrderService;
