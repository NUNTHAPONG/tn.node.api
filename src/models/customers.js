module.exports = (sequelize, Sequelize) => {

  const customers = sequelize.define(
    "customers",
    {
      customerId: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'customer_id' },
      firstName: { type: Sequelize.DataTypes.STRING(255), allowNull: false, field: 'first_name' },
      lastName: { type: Sequelize.DataTypes.STRING(255), allowNull: false, field: 'last_name' },
      phone: { type: Sequelize.DataTypes.STRING(25), allowNull: true, field: 'phone' },
      email: { type: Sequelize.DataTypes.STRING(255), allowNull: false, field: 'email' },
      street: { type: Sequelize.DataTypes.STRING(255), allowNull: true, field: 'street' },
      city: { type: Sequelize.DataTypes.STRING(50), allowNull: true, field: 'city' },
      state: { type: Sequelize.DataTypes.STRING(25), allowNull: true, field: 'state' },
      zipCode: { type: Sequelize.DataTypes.STRING(5), allowNull: true, field: 'zip_code' },
    },
    {
      tableName: "customers",
    }
  );

  return customers;
};
