const { Entity: ValueObject } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

const Address = require('../Entities/Address')
const RouteInstruction = require('./RouteInstruction')

function sanitizeData (data) {
  if (data.origin instanceof Address) {
    Object.assign(data, { origin: new Address(data.origin) })
  }

  if (data.destination instanceof Address) {
    Object.assign(data, { destination: new Address(data.destination) })
  }

  return data
}

class Route extends ValueObject {
  constructor (data) {
    super(sanitizeData(data))
  }
}

Route.SCHEMA = objectAdapter({
  origin: Joi.object().type(Address).required(),
  destination: Joi.object().type(Address).required(),
  instructions: Joi.array().items(Joi.object().type(RouteInstruction).required()).required()
})

module.exports = Route
