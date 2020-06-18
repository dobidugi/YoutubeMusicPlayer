const express = require("express");
const router = express.Router();

const youtube = require('../js/youtube');


router.get("/", (req, res) => {
    res.sendFile("playlist.html", { root : "src/server/public/views"});

});

router.get("/add", (req, res) => {
    const url = req.param("url");
    const name = req.param("name");
    youtube.addPlayList(url,name, () => {
        res.end();
    });
});

module.exports = router;