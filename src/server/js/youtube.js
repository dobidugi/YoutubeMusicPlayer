const yts = require( 'yt-search' );
const youtubedl = require( 'youtube-dl' );
const fs = require( 'fs' );
module.exports.search = async function(keyword) {
    let result;
    const options = {
        search: keyword,
    }
    result = await yts(options);
    return result.videos;
}

module.exports.download = async function(url, type, callback)  {
    const video = youtubedl(url);
    video.pipe(fs.createWriteStream('./tmp/tmp.'+type)).on("finish",function(){
        callback();
    });
}

module.exports.addPlayList = async function(url, name, callback) {
    console.log(url,name);
    const video = youtubedl(url);
    video.pipe(fs.createWriteStream( 'src/server/public/music/'+name+ '.mp3')).
    on("finish", function() {
        callback();
    });
}