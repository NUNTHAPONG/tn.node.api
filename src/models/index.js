module.exports = (sequelize, Sequelize) => {
  return {
    sequelize: sequelize,
    Sequelize: Sequelize,
    customers: require("./customers")(sequelize, Sequelize),
  };
};
