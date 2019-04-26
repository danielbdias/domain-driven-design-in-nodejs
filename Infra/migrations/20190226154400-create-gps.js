module.exports = {
  up: (queryInterface, Sequelize) => {
    const columns = {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE(6)
      },
      updatedAt: {
        type: Sequelize.DATE(6)
      }
    }

    return queryInterface.createTable('GPS', columns)
  },
  down: (queryInterface) => queryInterface.dropTable('GPS')
}
