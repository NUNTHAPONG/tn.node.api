const express = require("express");
const http = require("http");
const cors = require("cors");
const response = require("./responses");

module.exports = (Models) => {
  var app = express();
  const server = http.createServer(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(response);

  app.use(require("../routes")(Models));

  return {
    app: app,
    server: server,
  };
};
