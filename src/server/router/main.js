const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("index.html", { root : "src/server/public/views"});

});

module.exports = router;