const express = require("express");
const router = express.Router();

const youtube = require('../js/youtube');
const file = require('../js/file');

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


router.get("/filelist", async (req, res)=> {
    file.readFileList((list)=> {
        res.send(list).end();
    });
    
})

router.get("/remove", async (req, res)=> {
    const name = req.param("name");

    file.removeMusic(name, (list) => {
        res.send(list).end();
    });
})

module.exports = router;