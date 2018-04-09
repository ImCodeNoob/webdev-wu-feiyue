// module.exports  = function () {
//     var models = {
//         userModel: require("./user/user.model.server")(),
//         websiteModel: require("./website/website.model.server")(),
//         pageModel: require("./page/page.model.server")(),
//         widgetModel: require("./widget/widget.model.server")()
//     };
//     return models;
// };

var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/webdev', {useMongoClient: true}); //for local
var db = mongoose.connect('mongodb://test:test@ds263707.mlab.com:63707/heroku_5710c88c', {useMongoClient: true});
module.exports = db;
