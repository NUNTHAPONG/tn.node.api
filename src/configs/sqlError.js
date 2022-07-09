module.exports = (error) => {
  console.error(error);
  let { parent, errors } = error;
  let logger = {};
  if (parent) {
    logger.error = `code ${parent.code ? parent.code : 99999} : ${
      parent.detail ? parent.detail : "Contact to admin"
    }`;
  } else if (errors) {
    logger.errors = [];
    errors.forEach((err) => {
      let items = {
        column: err.path ? err.path : "Not Found",
        type: err.type ? err.type : "Not Found",
        message: err.message ? err.message : "Can not be identified",
      };
      logger.errors.push(items);
    });
  }
  return logger;
};
