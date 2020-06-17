const express = require("express");
const youtube = require('../../js/youtube');
const router = express.Router();

router.get("/", async (req, res) => {
    const keyword = req.param("keyword");
    console.log(keyword);
    const result = await youtube.search(keyword);
    res.send(result).end();
    console.log(result[0].title);
});

module.exports = router;