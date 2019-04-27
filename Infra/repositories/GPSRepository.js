const PostgresClient = require('../clients/PostgresClient')

const GPS = require('../../Domain/Entities/GPS')

const GPSRepository = {
  async save(gps) {
    if (gps.id) return this.update(gps)
    return this.insert(gps)
  },
  async insert(gps) {
    const sql = `
      INSERT INTO "public"."GPS" (
        "type", "createdAt", "updatedAt")
      VALUES (
        $1, now(), now())
      RETURNING *;`

    const [ result ] = await PostgresClient.query(sql, [ gps.type ])

    return new GPS(result)
  },
  async update(address) {
    const sql = `
      UPDATE "public"."GPS" SET
        "type" = $1,
        "updatedAt" = now()
      WHERE
        "id" = $2
      RETURNING *;`

    const [ result ] = await PostgresClient.query(sql, [ gps.type, gps.id ])

    return new GPS(result)
  },
  async delete(gps) {
    const sql = `
      DELETE FROM "public"."GPS"
      WHERE "id" = $1;`

    await PostgresClient.query(sql, [ gps.id ])
  },
  async getOneById(id) {
    const sql = `
      SELECT
        "id", "type"
      FROM
        "public"."GPS"
      WHERE
        "id" = $1
      LIMIT 1;`

    const [ result ] = await PostgresClient.query(sql, [ id ])

    return new GPS(result)
  },
  async getAll() {
    const sql = `
      SELECT
        "id", "type"
      FROM
        "public"."GPS";`

    const result = await PostgresClient.query(sql)

    return result.map(item => new GPS(item))
  }
}

module.exports = GPSRepository
