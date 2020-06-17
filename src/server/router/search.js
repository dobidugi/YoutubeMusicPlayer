const express = require("express");
const youtube = require('../js/youtube');
const router = express.Router();

router.get("/", async (req, res) => {
    let result;
    const keyword = req.param("keyword");
    result = await youtube.search(keyword);
    if(result.length === 0) result = await youtube.search(keyword);
    res.send(result).end();
});

module.exports = router;