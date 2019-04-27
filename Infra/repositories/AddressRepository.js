const PostgresClient = require('../clients/PostgresClient')

const Address = require('../../Domain/Entities/Address')

const AddressRepository = {
  async save(address) {
    if (address.id) return this.update(address)
    return this.insert(address)
  },
  async insert(address) {
    const sql = `
      INSERT INTO "public"."Addresses" (
        "city", "complement", "createdAt", "kind",
        "name", "number", "state", "updatedAt", "zipCode")
      VALUES (
        $1, $2, now(), $3,
        $4, $5, $6, now(), $7 )
      RETURNING *;`

    const [ result ] = await PostgresClient.query(sql, [
      address.city, address.complement, address.kind, address.name,
      address.number, address.state, address.zipCode ])

    return new Address(result)
  },
  async update(address) {
    const sql = `
      UPDATE "public"."Addresses" SET
        "city" = $1,
        "complement" = $2,
        "kind" = $3,
        "name" = $4,
        "number" = $5,
        "state" = $6,
        "updatedAt" = now(),
        "zipCode" = $7
      WHERE
        "id" = $8
      RETURNING *;`

    const [ result ] = await PostgresClient.query(sql, [
      address.city, address.complement, address.kind, address.name,
      address.number, address.state, address.zipCode, address.id ])

    return new Address(result)
  },
  async delete(address) {
    const sql = `
      DELETE FROM "public"."Addresses"
      WHERE "id" = $1;`

    await PostgresClient.query(sql, [ address.id ])
  },
  async getOneById(id) {
    const sql = `
      SELECT
        "id", "city", "complement", "createdAt", "kind",
        "name", "number", "state", "updatedAt", "zipCode"
      FROM
        "public"."Addresses"
      WHERE
        "id" = $1
      LIMIT 1;`

    const [ result ] = await PostgresClient.query(sql, [ id ])

    return new Address(result)
  },
  async getAll() {
    const sql = `
      SELECT
        "id", "city", "complement", "createdAt", "kind",
        "name", "number", "state", "updatedAt", "zipCode"
      FROM
        "public"."Addresses";`

    const result = await PostgresClient.query(sql)

    return result.map(item => new Address(item))
  }
}

module.exports = AddressRepository
