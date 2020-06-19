const server = require('./src/server/app');
const file = require('./src/server/js/file');
const youtubedl = require('youtube-dl');
const fs = require('fs');

// const url = "https://www.youtube.com/watch?v=wdxLk5fBt2c"

// // youtubedl.exec(
// //     url,
// //     // ['-f', 'best','-o','a.mp4'],
// //     ['-F'],
// //     {},
// //     function exec (err, output) {
// //       'use strict'
// //       if (err) {
// //         throw err
// //       }
// //       console.log(output.join('\n'))
// //     }
// //   )

// const video = youtubedl('https://www.youtube.com/watch?v=wdxLk5fBt2c',
// ['--format=398']);
// video.pipe(fs.createWriteStream('myvideo.mp4'));
console.log("test");
// file.readFile();
server.start();