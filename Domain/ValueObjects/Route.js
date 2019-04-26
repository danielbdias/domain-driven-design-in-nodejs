const { Entity: ValueObject } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

const Address = require('../Entities/Address')
const RouteInstruction = require('./RouteInstruction')

function sanitizeData (data) {
  if (data.start instanceof Address) {
    Object.assign(data, { start: new Address(data.start) })
  }

  if (data.end instanceof Address) {
    Object.assign(data, { end: new Address(data.end) })
  }

  return data
}

class Route extends ValueObject {
  constructor (data) {
    super(sanitizeData(data))
  }
}

Route.SCHEMA = objectAdapter({
  start: Joi.object().type(Address).required(),
  end: Joi.object().type(Address).required(),
  instructions: Joi.array().items(Joi.object().type(RouteInstruction).required()).required()
})

Route.TYPE_DOC = 'Representa uma rota de uma origem a um destino'

Route.FIELD_DOCS = {
  start: 'Endereço de origem da rota',
  end: 'Endereço de destino da rota',
  instructions: 'Instruções de navegação da rota'
}

module.exports = Route
