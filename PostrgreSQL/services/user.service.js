const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const users = await models.User.findAll({include: ['customer']});
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
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

module.exports = UserService;
