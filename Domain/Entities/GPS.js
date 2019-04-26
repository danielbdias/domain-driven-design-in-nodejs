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
  type: Joi.string().required(),
  createdAt: Joi.date().timestamp(),
  updatedAt: Joi.date().timestamp()
})

GPS.TYPE_DOC = 'Representa uma fonte de dados de geolocalização (Google Maps, Waze, etc.)'

GPS.FIELD_DOCS = {
  type: 'Tipo de fonte de Geolocalização que será utilizado',
}

module.exports = GPS
