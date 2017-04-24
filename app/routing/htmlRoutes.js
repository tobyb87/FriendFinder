
// We need to include the path package to get the correct file path for our html
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res){
  //res.send("Friend Finder");
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function(req, res){
  //res.send("Friend Finder");
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //module.exports = htmlRoutes;
};