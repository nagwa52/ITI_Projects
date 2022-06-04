const fs = require("fs")

fs.readFile('./greet.txt', 'utf-8', (err, file) => {
  const lines = file.split('\n')

  for (let line of lines)
    console.log(line)
});