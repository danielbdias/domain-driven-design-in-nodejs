module.exports = {
  up: (queryInterface, Sequelize) => {
    const columns = {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      complement: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      kind: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE(6)
      },
      updatedAt: {
        type: Sequelize.DATE(6)
      }
    }

    return queryInterface.createTable('Addresses', columns)
  },
  down: (queryInterface) => queryInterface.dropTable('Addresses')
}
