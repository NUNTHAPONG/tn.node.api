module.exports = (Models) => {
  const router = require("express").Router();
  const customers = require("./customer")(Models);

  router.use("/api", customers);

  return router;
};
