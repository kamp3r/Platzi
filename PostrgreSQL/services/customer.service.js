const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CustomerService {
  constructor() {}
  async find() {
    const customers = await models.Customer.findAll({
      include: ['user'],
    });
    return customers;
  }

  async findOne(id) {
    const costumer = await models.Customer.findByPk(id);
    if (!costumer) {
      throw boom.notFound('Customer not found');
    }
    return costumer;
  }
  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user'],
    });
    return newCustomer;
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

module.exports = CustomerService;
