module.exports = (sequelize, DataTypes) =>
  sequelize.define('Address',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      kind: DataTypes.STRING
    },
    {
      timestamps: true,
      tableName: 'Addresses'
    })
