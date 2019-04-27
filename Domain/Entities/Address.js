const { Entity } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

const { BRAZILIAN_STATES, ADDRESS_KIND } = require('./Address.constants')

class Address extends Entity { }

Address.SCHEMA = objectAdapter({
  id: Joi.number().integer(),
  name: Joi.string().required(),
  number: Joi.number().integer(),
  complement: Joi.string(),
  zipCode: Joi.string().regex(/[0-9]+/).length(8).required(),
  city: Joi.string().required(),
  state: Joi.string().allow(BRAZILIAN_STATES).required(),
  kind: Joi.string().allow(ADDRESS_KIND).required()
})

module.exports = Address
