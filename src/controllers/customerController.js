module.exports = (Models) => {
  const Customers = Models.customers;

  return {
    Create: async (req, res) => {
      const request = req.body;
      await Customers.create(request)
        .then()
        .catch((err) => res.json({ error: err.error.parent }));
      return res.sendStatus(200);
    },
    Read: async (_req, res) => {
      const result = await Customers.findAll()
        .then()
        .catch((err) => res.json({ error: err.error.parent }));
      return res.json(result);
    },
    Update: async (req, res) => {
      const request = req.body;
      await Customers.update(request, {
        where: {
          customerId: request.customerId,
        },
      })
        .then()
        .catch((err) => res.json({ error: err.error.parent }));
      return res.sendStatus(200);
    },
    Delete: async (req, res) => {
      const { id } = req.params;
      await Customers.destroy({
        where: {
          customerId: id,
        },
      })
        .then()
        .catch((err) => res.json({ error: err.error.parent }));
      return res.sendStatus(200);
    },
    Find: async (req, res) => {
      const { id } = req.params;
      const result = await Customers.findByPk(id)
        .then()
        .catch((err) => res.json({ error: err.error.parent }));
      return res.json(result);
    },
  };
};
