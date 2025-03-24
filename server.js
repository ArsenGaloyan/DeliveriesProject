const express = require("express");
const jsonServer = require("json-server");

const app = express();
const router = jsonServer.router("data.json"); 
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(express.json());
app.use("./", router); 

const PORT = 3001; 

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
