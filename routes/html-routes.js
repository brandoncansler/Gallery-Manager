// html routes
var path = require("path");

module.exports = function (app) {
    app.get("/gallery", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/gallery.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/upload", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/upload.html"));
    });
};
