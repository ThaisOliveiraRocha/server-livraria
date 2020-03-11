//app chama arquivo config-express
//conectar porta
const app = require("./src/config/config-express");
const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Servidor conectado na porta ${port}.`);
});
