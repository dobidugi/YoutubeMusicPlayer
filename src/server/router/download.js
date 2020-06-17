const express = require("express");
const youtube = require('../js/youtube');

const router = express.Router();

router.get("/", async (req, res) => {
    let result;
    const url = req.param("url");
    const type = req.param("type");
    
    console.log(url, type);
    youtube.download(url,type, function() {
        res.download('./tmp/tmp.'+type);
    });
    // res.send(result).end();
});

module.exports = router;