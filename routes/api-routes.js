var db = require("../models");

module.exports = function (app) {
  function doFindAll(where, res) {
    db.Gallery.findAll({ where }).then(function (results) {
      res.json(results);
    });
  }

  app.get("/api/all", function (req, res) {
    doFindAll({}, res);
    
  });

  app.post("/api/new", function (req, res) {
    console.log(req.body);
    db.Gallery.create({
      galleryName: req.body.galleryName,
    }).then(function (results) {
      res.json(results);
    });
  });

  app.delete("/api/:id", function (req, res) {
    console.log(req.params.id);
    db.Gallery.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });
};
