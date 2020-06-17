const yts = require( 'yt-search' )

module.exports.search = async function(keyword) {
    const options = {
        search: keyword,
        pageStart: 1,
        pageEnd: 1
    }
    const result = await yts(options);
    return result.videos;
}