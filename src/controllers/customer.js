module.exports = (Models) => {
  const { Op } = Models.Sequelize;
  const sequelize = Models.sequelize;
  const Customers = Models.customers;

  return {
    Create: async (req, res) => {
      const request = req.body;
      try {
        await Customers.create(request);
        return res.success();
      } catch (error) {
        return res.failSql(error);
      }
    },
    Read: async (req, res) => {
      let { keyword } = req.query;
      keyword = keyword ? `%${keyword}%` : `%`;
      let option = {
        where: {
          [Op.or]: {
            firstName: { [Op.iLike]: keyword },
            lastName: { [Op.iLike]: keyword },
            email: { [Op.iLike]: keyword },
          },
        },
        order: [["customer_id", "ASC"]],
      };
      try {
        let { count, rows } = await Customers.findAndCountAll(option);
        return res.success({ data: rows, count: count });
      } catch (error) {
        return res.failSql(error);
      }
    },
    Update: async (req, res) => {
      const request = req.body;
      try {
        await Customers.update(request, {
          where: {
            customerId: request.customerId,
          },
        });
        return res.success();
      } catch (error) {
        return res.failSql(error);
      }
    },
    Delete: async (req, res) => {
      const { id } = req.query;
      try {
        await Customers.destroy({
          where: {
            customerId: id,
          },
        });
        return res.success();
      } catch (error) {
        return res.failSql(error);
      }
    },
    Find: async (req, res) => {
      const { id } = req.params;
      try {
        let result = await Customers.findByPk(id);
        return res.success(result);
      } catch (error) {
        return res.failSql(error);
      }
    },
  };
};
