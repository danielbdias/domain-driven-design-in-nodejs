const Route = require('../../../Domain/ValueObjects/Route')
const RouteInstruction = require('../../../Domain/ValueObjects/RouteInstruction')

const gmaps = require('@google/maps')
const striptags = require('striptags')

const config = require('../../config/maps')

class GoogleMapsClient {
  async calculateRoute(origin, destination) {
    const googleMapsClient = gmaps.createClient({ key: config.gmapsAPIKey, Promise: Promise });

    const originAddressString = this.addressAsString(origin)
    const destinationAddressString = this.addressAsString(destination)

    const originGeocode = await googleMapsClient.geocode({ address: originAddressString }).asPromise()
    const destinationGeocode = await googleMapsClient.geocode({ address: destinationAddressString }).asPromise()

    const originCoordinates = originGeocode.json.results[0].geometry.location
    const destinationCoordinates = destinationGeocode.json.results[0].geometry.location

    const route = await googleMapsClient.directions({ origin: originCoordinates, destination: destinationCoordinates }).asPromise()

    const routeInstructions = route.json.routes[0].legs[0].steps

    const instructions = routeInstructions.map((item, index) =>
      new RouteInstruction({ order: index + 1, description: `Drive ${item.duration.text} to ${striptags(item.html_instructions)} for ${item.distance.text}`  })
    )

    return new Route({
      origin, destination,
      instructions
    })
  }

  addressAsString(address) {
    return `${address.name}, ${address.number}, ${address.city}, ${address.state}`
  }
}

module.exports = new GoogleMapsClient()
