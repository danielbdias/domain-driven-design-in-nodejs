const AddressRepository = require('../../../Infra/repositories/AddressRepository')
const GPSRepository = require('../../../Infra/repositories/GPSRepository')

module.exports = async function TraceRoute ({ originId, destinationId, gpsType }) {
  const origin = await AddressRepository.getOneById(originId)
  const destination = await AddressRepository.getOneById(destinationId)

  const gps = await GPSRepository.getOneByType(gpsType)

  return gps.calculate(origin, destination)
}
