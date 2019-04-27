const { Entity: ValueObject } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

class RouteInstruction extends ValueObject {}

RouteInstruction.SCHEMA = objectAdapter({
  description: Joi.string().required(),
  order: Joi.number().integer().positive().required()
})

module.exports = RouteInstruction
