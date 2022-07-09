module.exports = (Models) => {
  const router = require("express").Router();
  const Customers = require("../controllers/customer")(Models);

  router.get("/customers", Customers.Read);
  router.get("/customers/:id", Customers.Find);
  router.post("/customers", Customers.Update);
  router.put("/customers", Customers.Create);
  router.delete("/customers", Customers.Delete);

  return router;
};
