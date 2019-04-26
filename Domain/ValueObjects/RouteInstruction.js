const { Entity: ValueObject } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

class RouteInstruction extends ValueObject {}

RouteInstruction.SCHEMA = objectAdapter({
  description: Joi.string().required(),
  order: Joi.number().integer().positive().required()
})

RouteInstruction.TYPE_DOC = 'Instrução de uma rota no GPS'

RouteInstruction.FIELD_DOCS = {
  description: 'Descrição da instrução',
  order: 'Ordem da instrução a ser executada'
}

module.exports = RouteInstruction
