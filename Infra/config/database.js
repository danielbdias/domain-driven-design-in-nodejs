const { isRemote } = require('./environment')

const localConfig = {
  host: process.env.DATABASE_HOST || 'localhost',
  database: 'example',
  username: 'root',
  password: 'password',
  port: 5432,
  seederStorage: 'sequelize',
  logging: console.log,
  dialect: 'postgres'
}

const remoteConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  seederStorage: 'sequelize',
  logging: console.log,
  dialect: 'postgres'
}

module.exports = isRemote ? remoteConfig : localConfig
