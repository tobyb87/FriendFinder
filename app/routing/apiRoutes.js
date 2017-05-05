
var express = require("express");
var friends = require("../data/friends");
//var waitListData = require("../data/waitinglistData");

module.exports = function(app) {
  app.get("/api/:friends?", function(req, res) {
    var profile = req.params.friends;

    if (profile) {
      console.log(profile);

      for (var i = 0; i < friends.length; i++) {
        if (profile === friends[i].routeName) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
  });

};

//  module.exports = tableArray;