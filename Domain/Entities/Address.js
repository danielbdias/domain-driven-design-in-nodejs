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
  kind: Joi.string().allow(ADDRESS_KIND).required(),
  createdAt: Joi.date().timestamp(),
  updatedAt: Joi.date().timestamp()
})

Address.TYPE_DOC = 'Representa um endereço brasileiro'

Address.FIELD_DOCS = {
  name: 'Nome, Logradouro do endereço (ex. Rua Cidade Brasileira)',
  number: 'Número do imóvel no logradouro',
  complement: 'Complemento do endereço',
  zipCode: 'Código postal (CEP) do endereço',
  city: 'Cidade onde o endereço está localizado',
  state: 'Estado brasileiro onde o endereço está localizado',
  kind: 'Tipo de endereço (casa, trabalho, etc)'
}

module.exports = Address
