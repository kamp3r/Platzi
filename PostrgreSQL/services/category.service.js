const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const category = models.Category.create(data)
    return category;
  }

  async find() {
    const data = models.Category.findAll()
    return data
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    });
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }

  async update(id, changes) {
    const toUpdated = await this.findOne(id);
    const finalData = await toUpdated.update(changes);
    return finalData
  }

  async delete(id) {
    const toDeleted = await this.findOne(id);
    await toDeleted.destroy()
    return {id}
  }

}

module.exports = CategoryService;
