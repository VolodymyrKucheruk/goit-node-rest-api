import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().min(3).required(),
  phone: Joi.string().min(3).required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().min(3),
  phone: Joi.string().min(3),
  favorite: Joi.boolean(),
});