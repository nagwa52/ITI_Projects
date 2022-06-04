const fs = require('fs')
fs.writeFileSync('./info.txt',"hello iti",{ encoding: 'utf8'})
console.log("Done writing");