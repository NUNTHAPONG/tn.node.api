module.exports = (sequelize, Sequelize) => {
  return {
    customers: require("./customers")(sequelize, Sequelize),
  };
};
