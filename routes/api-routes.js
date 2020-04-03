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

  app.post("/api/new", function(req, res) {
    console.log(req.body);
    Gallery.create({
      title: req.body.title,
    }).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/:id", function(req, res) {
    console.log(req.params.id);
    Gallery.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};
