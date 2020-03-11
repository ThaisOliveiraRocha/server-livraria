const uuid = require("uuid/v4");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// const UserDAO = require("../dao/user-dao");
// const db = require("./db");

module.exports = app => {
  //configuracao da sessao e da autenticacao.
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      (email, password, done) => {
        const userDao = new UserDAO(db);
        userDao
          .searchByEmail(email)
          .then(user => {
            if (!user || password != user.password) {
              return done(null, false, {
                message: "Login e password incorretos!"
              });
            }
            return done(null, user);
          })
          .catch(erro => done(erro, false));
      }
    )
  );
  passport.serializeUser((user, done) => {
    const userSession = {
      name: user.fullname,
      email: user.email
    };
    done(null, userSession);
  });
  passport.deserializeUser((userSession, done) => {
    done(null, userSession);
  });
  app.use(
    session({
      secret: "node wcc",
      genid: function(req) {
        return uuid();
      },
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(function(req, resp, next) {
    req.passport = passport;
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());
};
