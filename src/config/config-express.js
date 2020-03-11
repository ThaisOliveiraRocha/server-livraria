const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const routes = require("../routes/routes");

const methodOverride = require("method-override");

//app.use('/static',express.static('src/app/public'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  methodOverride(function(req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
const sessionAutentication = require("./session-autentication");
sessionAutentication(app);

routes(app);
app.use(function(req, resp, next) {
  return resp.status(404).send("Página não encontrada.");
});
app.use(function(erro, req, resp, next) {
  return resp.status(500).send("Problemas com o servidor.");
});

module.exports = app;
