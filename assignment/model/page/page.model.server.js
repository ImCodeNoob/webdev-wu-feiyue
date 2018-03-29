var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var Page = mongoose.model('Page', PageSchema);
var WebsiteModel = require("../website/website.model.server");


Page.createPage = createPage;
Page.findAllPagesForWebsite = findAllPagesForWebsite;
Page.findPageById = findPageById;
Page.updatePage = updatePage;
Page.deletePage = deletePage;

module.exports = Page;

function createPage(websiteId, page) {
  page._website = websiteId;
  return Page.create(page)
    .then(function(responsePage){
      WebsiteModel.findWebsiteById(websiteId)
        .then(function(website){
          website.pages.push(responsePage);
          return website.save();
        });
      return responsePage;
    });
  // return Page.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return Page.find({ _website: websiteId });
}

function findPageById(pageId) {
  return Page.findById(pageId);
}

function updatePage(pageId, page) {
  return Page.findByIdAndUpdate(pageId, page);
}

function deletePage(pageId) {
  return Page.findByIdAndRemove(pageId);
}
