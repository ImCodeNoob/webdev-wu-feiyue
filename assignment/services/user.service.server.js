module.exports = function (app) {
  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  // app.get("/api/user?username=username", findUserByUsername);
  // app.get("/api/user?username=username&password=password", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  function createUser(req, res) {
    var user = req.body;
    for(var i=0; i < users.length; i++) {
      if(users[i].username === user["username"]) {
        res.status(404).send("This user is already exist");
        return;
      }
    }
    user._id = Math.random().toString();
    users.push(user);
    res.json(user);
  }

  function findUserByUsername(req, res) {
    var userName = req.query["username"];
    var user = users.find(function (user) {
      return user.username === userName;
    });
    res.json(user);
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        res.json(users[i]);
        return;
      }
    }
    res.status(404).send("Cannot find user with user ID: " + userId);
  }

  function findUserByCredentials(req, res) {
    console.log("it is in server");
    var username = req.query["username"];
    var password = req.query["password"];
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        res.json(users[i]);
        return;
      }
    }
    res.status(404).send("Username and password did not match.");
  }

  function findUser(req, res){
    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      res.json(user);
    }
    else {
      res.status(404).send("Username and password did not match.");
    }
  }

  function updateUser(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;

        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    for(var i=0; i<users.length; i++) {
      if(users[i]._id === userId) {
        res.json(users[i]);
        users.splice(i, 1);
        return;
      }
    }
    res.status(404).send("User cannot be found!");
  }
}
