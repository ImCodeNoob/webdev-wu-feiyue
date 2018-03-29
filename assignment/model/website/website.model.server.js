var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var Website = mongoose.model('Website', WebsiteSchema);
var UserModel = require("../user/user.model.server");

Website.createWebsiteForUser = createWebsiteForUser;
Website.findAllWebsitesForUser = findAllWebsitesForUser;
Website.findWebsiteById = findWebsiteById;
Website.updateWebsite = updateWebsite;
Website.deleteWebsite = deleteWebsite;

module.exports = Website;

function createWebsiteForUser(userId, website) {
  website._user = userId;
  return Website.create(website)
    .then(function(responseWebsite){
      UserModel.findUserById(userId)
        .then(function(user){
          user.websites.push(responseWebsite);
          return user.save();
        });
      return responseWebsite;
    });
  // return Website.create(website);
}

function findAllWebsitesForUser(userId) {
  return Website.find({ _user: userId });
}

function findWebsiteById(websiteId) {
  return Website.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return Website.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
  return Website.findByIdAndRemove(websiteId);
}
