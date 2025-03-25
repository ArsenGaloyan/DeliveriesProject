const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router("data.json"); 
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(express.json());
app.use(router); 

module.exports = app; 

