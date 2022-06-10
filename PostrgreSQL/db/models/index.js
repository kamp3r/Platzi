const { User, UserSchema } = require('./user.model');

const setUpModel = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
};

module.exports = setUpModel;
