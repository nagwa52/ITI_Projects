var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log("done creating the directory");
}
else{
    console.log("can't create the directory");   
}