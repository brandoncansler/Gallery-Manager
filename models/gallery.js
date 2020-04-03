module.exports = function (sequelize, DataTypes) {
  var Gallery = sequelize.define("Gallery", {
    galleryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }

  });
  return Gallery;
};
// Gallery.sync();