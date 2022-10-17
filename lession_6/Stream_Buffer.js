const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);  //another way
ourReadStream.on('data', function (chunk) {
 // console.log(chunk);
 console.log(chunk.toString());
});
console.log('hello');