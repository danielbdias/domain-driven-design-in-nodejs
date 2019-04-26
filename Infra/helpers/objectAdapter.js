const { validatorAdapter } = require('speck-entity')

const dependencies = {
  adapter: validatorAdapter('joi', require('joi'))
}

module.exports = function objectAdapter (anObject, injection) {
  const { adapter } = Object.assign({}, dependencies, injection)

  return Object.keys(anObject)
    .reduce((accumulator, key) => Object.assign(accumulator, { [key]: adapter(anObject[key]) }), {})
}
