var Gallery = require("../models/gallery.js");

module.exports = function(app) {
  function doFindAll(where, res) {
    Gallery.findAll({ where }).then(function(results) {
      res.json(results);
    });
  }

  app.get("/api/all", function(req, res) {
    doFindAll({}, res);
  });
};
