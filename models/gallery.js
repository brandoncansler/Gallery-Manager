var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Gallery = sequelize.define("Gallery", {
  photos: Sequelize.STRING,
 
});

Gallery.sync();

module.exports = Gallery;