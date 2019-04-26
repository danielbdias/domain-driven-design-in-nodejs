const localEnvs = [ 'dev', 'test' ]

const environment = Object.assign({ NODE_ENV: 'dev' }, process.env).NODE_ENV
const isRemote = !localEnvs.includes(environment)

module.exports = { environment, isRemote }
