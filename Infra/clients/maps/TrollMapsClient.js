const Route = require('../../../Domain/ValueObjects/Route')
const RouteInstruction = require('../../../Domain/ValueObjects/RouteInstruction')

class TrollMapsClient {
  calculateRoute(origin, destination) {
    const instructions = [
      new RouteInstruction({ order: 1, description: "Use o teletransporte a direita." }),
      new RouteInstruction({ order: 2, description: "Pronto !" })
    ]

    return new Route({
      origin, destination,
      instructions
    })
  }
}

module.exports = new TrollMapsClient()
