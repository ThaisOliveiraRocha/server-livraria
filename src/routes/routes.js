//rotas para GET, POST, UPDATE, DELETE
module.exports = app => {
  const { listAllProducts, insertProduct, insertUser, listUser, deleteUser } = require("../config/db");
  const { check, validationResult } = require("express-validator/check");

  const express = require("express");
  app.use(express.json());

  app.get("/produtos", async function(req, resp) {
    const lista = await listAllProducts();
    console.log(lista);
    resp.send(lista);
  });

  app.post("/produtos", async function(req, res) {
    const inserido = await insertProduct(req.body);
    res.send(inserido);
  });

  app.get("/admin", function(req, res){

  });

  app.get("/user-cliente/:email", async function(req, res){
    const user = await listUser(req.param);
    res.send(user);
  });

  app.post("/user-cliente", async function(req, res){
    const user = await insertUser(req.body);
    res.send(user);
  });

  app.delete("/user-cliente", async function(req, res){
      const del = await deleteUser(req.body);
      res.send(del);
  });
  //   app.get("/musicas", function(req, resp) {
  //     const musicaDAO = new MusicaDAO(db);
  //     musicaDAO
  //       .list()
  //       .then(musicas =>
  //         resp.marko(require("../views/musicas/list/list.marko"), {
  //           musicas: musicas
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   });
  //   app.get("/musicas/reg", function(req, resp) {
  //     resp.marko(require("../views/musicas/reg/reg.marko"), { musica: {} });
  //   });

  //   app.post(
  //     "/musicas",
  //     [
  //       check("nome")
  //         .isLength({ min: 3 })
  //         .withMessage("O nome deve ter pelo menos 5 caracteres!"),
  //       check("compositor")
  //         .isLength({ min: 3 })
  //         .withMessage("O compositor precisa ter pelo menos 5 caracteres!")
  //     ],
  //     function(req, resp) {
  //       const musicaDAO = new MusicaDAO(db);

  //       const errors = validationResult(req);
  //       if (!errors.isEmpty()) {
  //         resp.marko(require("../views/musicas/reg/reg.marko"), {
  //           musica: {},
  //           errorsValidation: errors.array()
  //         });
  //       }

  //       musicaDAO
  //         .insert(req.body)
  //         .then(resp.redirect("/musicas"))
  //         .catch(err => console.log(err));
  //     }
  //   );
  //   app.delete("/musicas/:id", function(req, resp) {
  //     const id = req.params.id;
  //     const musicaDAO = new MusicaDAO(db);

  //     musicaDAO
  //       .remove(id)
  //       .then(() => resp.status(200).end())
  //       .catch(err => console.log(err));
  //   });
  //   app.get("/musicas/reg/:id", function(req, resp) {
  //     const id = req.params.id;
  //     const musicaDAO = new MusicaDAO(db);
  //     const { check, valdationResult } = require("express-validator/check");

  //     musicaDAO
  //       .searchId(id)
  //       .then(musica =>
  //         resp.marko(require("../views/musicas/reg/reg.marko"), {
  //           musica: musica
  //         })
  //       )
  //       .catch(erro => console.log(erro));
  //   });
  //   app.put("/musicas", function(req, resp) {
  //     const musicaDAO = new MusicaDAO(db);

  //     musicaDAO
  //       .update(req.body)

  //       .then(resp.redirect("/musicas"))
  //       .catch(err => console.log(err));
  //   });
  //   app.get("/login", function(req, resp) {
  //     resp.marko(require("../views/base/login/login.marko"));
  //   });
  //   app.post("/login", function(req, resp, next) {
  //     const passport = req.passport;
  //     passport.authenticate("local", (error, user, info) => {
  //       if (info) {
  //         return resp.marko(require("../views/base/login/login.marko"));
  //       }
  //       if (error) {
  //         return next(error);
  //       }
  //       req.login(user, error => {
  //         if (error) {
  //           return next(error);
  //         }
  //         return resp.redirect(resp.redirect("/musicas"));
  //       });
  //     })(req, resp, next);
  //   });
  //   app.get("/cadastrar", function(req, resp) {
  //     resp.marko(require("../views/base/cadastro/cadastro.marko"), { user: {} });
  //   });
  //   app.post("/cadastrar", function(req, resp) {
  //     const userD = new UserDAO(db);

  //     userD
  //       .insert(req.body)
  //       .then(resp.redirect("/musicas"))
  //       .catch(err => console.log("erro ao registrar"));
  //   });

  //   app.get("/home", function(req, resp) {
  //     const musicaDAO = new MusicaDAO(db);
  //     musicaDAO
  //       .list()
  //       .then(musicas =>
  //         resp.marko(require("../views/base/home/index.marko"), {
  //           musicas: musicas
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   });
};
