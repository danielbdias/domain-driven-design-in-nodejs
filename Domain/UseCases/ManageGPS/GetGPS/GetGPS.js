const GPSRepository = require('../../../../Infra/repositories/GPSRepository')
const GPS = require('../../../Entities/Address')

const isNull = value => (value === null || value === undefined)

module.exports = function GetGPS ({ id }) {
  if (id) {
    return GPSRepository.getOneById(id).then(result => [result])
  }

  return GPSRepository.getAll()
}
