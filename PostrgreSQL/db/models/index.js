const { User, UserSchema } = require('./user.model');
const { Order, OrderSchema } = require('./orders.model');
const { Product, ProductSchema } = require('./products.model');
const { Category, CategorySchema } = require('./categories.model');
const { Customer, CustomerSchema } = require('./customer.model');

const setUpModel = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
};

module.exports = setUpModel;
