const env = require("./configs/env");
const express = require("./configs/express");
let Models = require("./configs/sequelize")();
const mvc = express(Models);
const server = mvc.server;

mvc.app.get("/", (_req, res) => {
  return res.status(200).send("Server started, api/{controller}/{action}");
});

server.listen(env.network.PORT, () => {
  console.log(`server run at http://localhost:${env.network.PORT}`);
});
