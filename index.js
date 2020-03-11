//app chama arquivo config-express
//conectar porta
const app = require("./src/config/config-express");
app.listen(3005, () => {
  console.log("Servidor conectado na porta 3005.");
});
