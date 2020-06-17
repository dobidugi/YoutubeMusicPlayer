const express = require("express");
const path = require("path");
const app = express();
const main = require('./router/main');
const search = require('./router/search');
const download = require('./router/download');

module.exports.start = function() {
    app.use(express.static(path.join(__dirname,'/public')));
    app.use(express.json());

    app.use("/", main);
    app.use("/search", search);
    app.use("/download", download);
    app.listen(3000);
}
