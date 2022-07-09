module.exports = () => {
  const env = require("./env");
  const { Sequelize } = require("sequelize");

  const sequelize = new Sequelize(
    env.db.dbname,
    env.db.username,
    env.db.password,
    {
      host: env.db.hostname,
      dialect: env.db.dialect,
      define: {
        schema: env.db.schema,
        timestamps: false,
      },
    }
  );

  sequelize
    .authenticate()
    .then(() => console.log("Database Connected..."))
    .catch((err) => console.log({ error: err }));

  const models = require("../models")(sequelize, Sequelize);

  return models;
};
