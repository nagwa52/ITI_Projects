// read json file synchronus
const fs = require('fs');
let rawdata = fs.readFileSync('./data.json');
let student = JSON.parse(rawdata);
console.log(student);