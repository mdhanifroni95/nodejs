const fs = require('node:fs');
fs.writeFileSync('myFirstFile.txt', 'Hello Programmer');
//fs.writeFileSync('myFirstFile.txt', 'How are you'); //over write
fs.appendFileSync('myFirstFile.txt', ' How are you'); //if we are don't over write add text after

const data = fs.readFileSync('myFirstFile.txt'); //Sync data read avoided this way 
console.log(data);  //get Buffer data
console.log(data.toString()); // if we are fixed buffer data problem
// import *as fs from 'node:fs/promises';
const data1 = fs.readFile('myFirstFile.txt', (err, data) => {
 console.log(data.toString());
})  //Async Way work always try is it
console.log('Hello');

//read more File System