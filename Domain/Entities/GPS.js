const { Entity } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

const TrollMapsClient = require('../../Infra/clients/maps/TrollMapsClient')
const GoogleMapsClient = require('../../Infra/clients/maps/GoogleMapsClient')

class GPS extends Entity {
  calculate(origin, destination) {
    if (this.type === "troll") {
      return TrollMapsClient.calculateRoute(origin, destination)
    }

    return GoogleMapsClient.calculateRoute(origin, destination)
  }
}

GPS.SCHEMA = objectAdapter({
  id: Joi.number().integer(),
  type: Joi.string().required()
})

module.exports = GPS
