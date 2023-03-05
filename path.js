// path module
const path = require( 'node:path' );
const myPath = "D:/project/nodejs/path.js";
console.log( path.basename( myPath ) )  //return path name
//if we are Trailing directory separators are ignored
console.log( path.basename( myPath, '.js' ) )
console.log( path.dirname( myPath ) )  //return directory name
console.log( path.extname( myPath ) )  //return file extension name
//console.log( path.format( myPath ) );  //formate path name
const myPathAbs = "D:/project/nodejs./path.js";  //if give absolute path return true otherwise return false
console.log( path.isAbsolute( myPathAbs ) )

// join path
const joinPath = path.join( "user", "ifrat", "index.js" );
console.log( joinPath );

//parse
console.log( path.parse( myPath ) );