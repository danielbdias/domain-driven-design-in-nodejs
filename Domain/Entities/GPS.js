const { Entity } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

class GPS extends Entity {
  calculate() {
    // logic
  }
}

GPS.SCHEMA = objectAdapter({
  id: Joi.number().integer(),
  type: Joi.string().required()
})

module.exports = GPS
