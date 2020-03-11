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

mongo.connect(url, (err, client) => {
  if (err) {
    console.log(err);
    return;
  }

  const dataBase = client.db("LivrariaDB");
  const collection = dataBase.collection("Produtos");
  return listAll(collection);
//  insertItem(dataBase, item);
});

listAll = (collection) => {
  collection.find().toArray((err, items) => {
    console.log(items);

    return items;
  });
};

insertItem = bd => {
  bd.collection("Produtos").insertOne(item);
  console.log("item inserido.");
};
module.exports = mongo;
