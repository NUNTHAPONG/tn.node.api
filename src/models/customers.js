module.exports = (sequelize, Sequelize) => {

  const customers = sequelize.define(
    "customers",
    {
      customerId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, field: 'customer_id' },
      firstName: { type: Sequelize.TEXT, allowNull: false, field: 'first_name' },
      lastName: { type: Sequelize.TEXT, allowNull: false, field: 'last_name' },
      phone: { type: Sequelize.TEXT, allowNull: true, field: 'phone' },
      email: { type: Sequelize.TEXT, allowNull: false, field: 'email' },
      street: { type: Sequelize.TEXT, allowNull: true, field: 'street' },
      city: { type: Sequelize.TEXT, allowNull: true, field: 'city' },
      state: { type: Sequelize.TEXT, allowNull: true, field: 'state' },
      zipCode: { type: Sequelize.TEXT, allowNull: true, field: 'zip_code' },
    },
    {
      tableName: "customers",
    }
  );

  return customers;
};
