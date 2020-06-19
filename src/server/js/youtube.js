const yts = require( 'yt-search' );
const youtubedl = require( 'youtube-dl' );
const fs = require( 'fs' );

module.exports.search = async (keyword) => {
    let result;
    const options = {
        search: keyword,
    }
    result = await yts(options);
    return result.videos;
}

module.exports.download = async (url, type, callback) => {
    const video = youtubedl(url);
    video.pipe(fs.createWriteStream('./tmp/tmp.'+type)).on("finish",function(){
        callback();
    });
}

module.exports.addPlayList = async (url, name, callback) => {
    let regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    const newName = name.replace(regExp, "");
    const video = youtubedl(url);
    video.pipe(fs.createWriteStream( `src/server/public/music/${newName}.mp3`)).
    on("finish", function() {
        callback();
    });
}

