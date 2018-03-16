module.exports = function(app){
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  websites = [
    { _id: "123", name: "Facebook", developId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter", developId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo", developId: "456", description: "Lorem" },
    { _id: "890", name: "Go", developId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers", developId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developId: "234", description: "Lorem" }
  ];

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    for (var i = 0; i < websites.length; i++) {
      if (websites[i].developId === userId && websites[i].name === website.name) {
        res.status(404).send("This website is already exist.");
        return;
      }
    }
    website._id = Math.random().toString();
    website.developId = userId;
    websites.push(website);
    res.json(website);
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    let resultSet = [];
    for (let x = 0; x < websites.length; x++) {
      if (websites[x].developId === userId) {
        resultSet.push(websites[x]);
      }
    }
    res.json(resultSet);
  }

  function findWebsiteById(req, res){
    var websiteId = req.params.websiteId;
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        return res.json(websites[i]);
      }
    }
    res.status(404).send("Cannot find the website");
  }

  function updateWebsite(req, res){
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for(var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i] = newWebSite;
        websites[i].name = newWebSite.name;
        websites[i].description = newWebSite.description;
        res.json(newWebSite);
        return;
      }
    }
    res.status(404).send("Website not found!");
    // res.json(getWebsitesForUserId(userId));
  }

  function deleteWebsite(req, res){
    var websiteId = req.params['websiteId'];
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        res.json(websites[x]);
        websites.splice(x, 1);
        return;
      }
    }
    res.status(404).send("Website with ID: " + websiteId + " cannot be found");

  }

  function  getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
}
