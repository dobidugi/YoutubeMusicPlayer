const fs = require( "fs" );

const Folder = "src/server/public/music/";

module.exports.readFileList = (callback) => {
    
    fs.readdir(Folder, function(err, fileList){
        callback(fileList);
    })
}

module.exports.removeMusic = (name, callback) => {
    fs.unlink(`${Folder}${name}`, function(err){
        if( err ) throw err;
        callback("ok");
    });
}