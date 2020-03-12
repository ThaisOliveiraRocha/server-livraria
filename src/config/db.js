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

listAllProducts = async () =>
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

insertProduct = async item => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      dataBase.collection("Produtos").insertOne(item);
      console.log("item inserido com sucesso.");
      resolve(item);
    });
  });
};

listUser = async email =>
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }

      const dataBase = client.db("LivrariaDB");
      dataBase.collection("Usuarios").findOne({ email }, function(err, result) {
        if (err) throw err;
        console.log(result);
        resolve(JSON.stringify(result));
        //dataBase.close();
      });
    });
  });

insertUser = async novoUser => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Usuarios");
      collection.insertOne(novoUser);
      console.log("usuário inserido com sucesso.");
      resolve(novoUser);
    });
  });
};

deleteUser = async id => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Usuarios");
      collection.deleteOne(id, function(err, obj) {
        if (err) throw err;
        console.log(`${id} deletado com sucesso!`);
        resolve("deletado.");
      });
    });
  });
};

module.exports = {
  listAllProducts,
  insertProduct,
  insertUser,
  listUser,
  deleteUser
};
