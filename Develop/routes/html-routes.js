const path = require("path");

module.exports = function (app) {
    //Home Screen Page Route
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/index.html"));
    });

    //New Exercise Page Route
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/exercise.html"))
    })

    // Statistics Page Route
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/stats.html"));
    });


};