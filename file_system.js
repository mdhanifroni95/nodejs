const fs = require('node:fs');
fs.writeFileSync('myFirstFile.txt', 'Hello Programmer');
//fs.writeFileSync('myFirstFile.txt', 'How are you'); //over write
fs.appendFileSync('myFirstFile.txt', ' How are you'); //if we are don't over write add text after 