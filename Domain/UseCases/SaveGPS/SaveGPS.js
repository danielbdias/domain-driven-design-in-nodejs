const GPSRepository = require('../../../Infra/repositories/GPSRepository')
const GPS = require('../../Entities/GPS')

function stringifyValidationError (validationErrors) {
  const formattedErrors = Object.keys(validationErrors)
    .reduce((accumulator, fieldName) => accumulator.concat(validationErrors[fieldName].errors), [])

  return JSON.stringify(formattedErrors)
}

module.exports = function SaveGPS ({ gps }) {
  const entity = new GPS(gps)

  if (!entity.valid) {
    return Promise.reject(
      new Error(`Entity ${EntityType.name} has validation problems! Errors: ${stringifyValidationError(entity.errors)}`)
    )
  }

  return GPSRepository.save(entity)
}
