const fs = require( "fs" );

const Folder = "src/server/public/music/";

module.exports.readFile = () => {
    fs.readdir(Folder, function(err, fileList){
        return fileList;
    })
}