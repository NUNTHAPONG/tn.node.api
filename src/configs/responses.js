const Error = require('./sqlError')
const Responses = {
  success(payload) {
    return this.status(200).json(payload);
  },

  fail(payload) {
    return this.status(400).json(payload);
  },

  failSql(error) {
    let payload = Error(error);
    return this.status(400).json(payload);
  },
};

module.exports = (req, res, next) => {
  Object.assign(res, Responses);
  next();
};
