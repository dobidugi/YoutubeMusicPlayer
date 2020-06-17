const yts = require( 'yt-search' )

module.exports.search = async function(keyword) {
    let result;
    const options = {
        search: keyword,
    }
    result = await yts(options);
    return result.videos;
}