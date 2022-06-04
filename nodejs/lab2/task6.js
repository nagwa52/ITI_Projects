/* Read data from data.json file as async */
const fs = require('fs');
var readfile = fs.createReadStream('./data.json', { encoding: 'utf8', highWaterMark: 32 * 1024 })
readfile.on('data', function(chunk) {
    console.log(JSON.parse(chunk))
})