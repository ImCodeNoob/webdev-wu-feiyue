var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

var facebookConfig = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
  // clientID: 1819216495045047,
  // clientSecret: 'baef0f100996c4bf2d0a8552f72b40b3',
  // callbackURL: 'https://localhost:3100/auth/facebook/callback'
  // callbackURL: 'https://webdev-wu-feiyue.herokuapp.com/auth/facebook/callback'
};

module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");


  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  // app.get("/api/user?username=username", findUserByUsername);
  // app.get("/api/user?username=username&password=password", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.post("/api/loggedIn", loggedIn);


  // auth with Facebook
  app.get("/auth/facebook/callback",
      passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
      })
  );

  app.get("/facebook/login", passport.authenticate('facebook', { scope: 'email' }));


  // var users = [
  //   {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
  //   {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
  //   {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
  //   {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  // ];

  //==========================
  // PASSPORT CONFIG
  //==========================

  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username).then(
      function (user) {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    );
  }

  passport.serializeUser(serializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  passport.deserializeUser(deserializeUser);

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function (user) {
        done(null, user);
      },
      function (err) {
        done(err, null);
      }
    );
  }

  passport.use(new FacebookStrategy(facebookConfig, facebokStrategy));

  //==========================
  // FACEBOOK O'AUTH
  //==========================

  function facebokStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id).then(
      function (user) {
        if (user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            username: '123',
            password: '123',
            lastName: names[1],
            firstName: names[0],
            email: profile.emails ? profile.emails[0].value : "",
            facebook: {
              id: profile.id,
              token: token
            }
          };
          return userModel.createUser(newFacebookUser);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    ).then(
      function (user) {
        return done(null, user);
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    );
  }

  //==========================
  // API SERVICE FUNCTIONS
  //==========================

  function loggedIn(req, res) {
    res.json(req.isAuthenticated() ? req.user : '0');
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.json(true);
  }

  function register(req, res) {
    var newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password);
    userModel.findUserByUsername(newUser.username).then(
      function (user) {
        if (user) {
          res.sendStatus(400).json("Username is in use!");
          return;
        } else {
          userModel.createUser(newUser).then(
            function (user) {
              if (user) {
                req.login(user, function (err) {
                  if (err) {
                    res.sendStatus(400).send(err);
                  } else {
                    res.json(user);
                  }
                });
              }
            }
          )
        }
      }
    )
  }

  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Something went wrong");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  };

  function findUser(req, res) {
    if (req.query["password"]) {
      findUserByCredentials(req, res);
    } else {
      findUserByUsername(req, res);
    }
  }

  function findUserByUsername(req, res) {
    var username = req.query["username"];
    userModel.findUserByUsername(username).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user with the username");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  };

  function findUserByCredentials(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    userModel.findUserByCredentials(username, password).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user with the username and password");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user with the ID");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  };

  function updateUser(req, res) {
    var userId = req.params["userId"];
    var updatedUser = req.body;
    userModel.updateUser(userId, updatedUser).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user")
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  };

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    userModel.deleteUser(userId).then(
      function (stats) {
        res.json(stats);
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  };
}
