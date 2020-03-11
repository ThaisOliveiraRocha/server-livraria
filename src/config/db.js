const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

const item = {
  imagem: "book2.png",
  titulo: "Tarde Demais",
  genero: "romance",
  autor: "Colleen Hoover",
  ano: "2014",
  situacao: "novo",
  preco: "10.50",
  qtd: 0
};

listAll = async () =>
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }

      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Produtos");
      collection.find().toArray((err, items) => {
        resolve(items);
      });
    });
  });

insertItem = bd => {
  bd.collection("Produtos").insertOne(item);
  console.log("item inserido.");
};
module.exports = { listAll };
