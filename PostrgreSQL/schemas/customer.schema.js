const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(20);
const lastname = Joi.string().min(3).max(30);
const adress = Joi.string().min(5).max(50);
const phone = Joi.number().min(8);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string()

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  adress: adress.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email,
    password: password
  })
});

const updateCustomerSchema = Joi.object({
  adress: adress,
  phone: phone,
  userId: userId
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
