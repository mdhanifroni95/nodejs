// path module
const path = require("node:path");
const myPath = "D:project/nodeJs/client/index.js";
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
console.log(path.delimiter);
// console.log(path.format());
console.log(path.isAbsolute("project/nodeJs")); //false
console.log(path.isAbsolute("/project/nodeJs")); //true
console.log(path.isAbsolute("/baz/..")); // true
console.log(path.isAbsolute("qux/")); // false
console.log(path.isAbsolute(".")); // false