// html routes
var path = require("path");

module.exports = function (app) {

    app.get("/upload", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/upload.html"));
    });
};
