const { isRemote } = require('./environment')

const localConfig = {
  user: 'root',
  host: process.env.DATABASE_HOST || 'localhost',
  database: 'example',
  password: 'password',
  port: 5432,
  ssl: false
}

const remoteConfig = {
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: true
}

module.exports = isRemote ? remoteConfig : localConfig
