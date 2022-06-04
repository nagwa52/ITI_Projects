// remove file content
const fs = require('fs')
fs.writeFile('./info.txt', '', function(){console.log('done')})