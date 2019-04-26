module.exports = (sequelize, DataTypes) =>
  sequelize.define('GPS',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      type: DataTypes.STRING
    },
    {
      timestamps: true,
      tableName: 'GPS'
    })
