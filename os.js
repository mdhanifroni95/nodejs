// Os Module
const os = require( "node:os" );
// console.log(os.EOL());
console.log( os.arch() ); //Returns the operating system CPU architecture for which the Node.js binary was compiled
// console.log(os.constants());
console.log( os.arch() ); //Returns the operating system CPU architecture for which the Node.js binary was compiled
console.log( os.cpus() ); //Returns an array of objects containing information about each logical CPU core. nice values are POSIX-only. On Windows, the nice values of all processors are always 0.
// console.log(os.devNull());
console.log( os.endianness() );
console.log( os.freemem() ); //Returns the amount of free system memory in bytes as an integer.
console.log( os.getPriority() ); //Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.
console.log( os.homedir() ); //Returns the string path of the current user's home directory
console.log( os.hostname() ); //Returns the host name of the operating system as a string.
console.log( os.loadavg() ); //The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
console.log( os.networkInterfaces() ); //Returns an object containing network interfaces that have been assigned a network address.
console.log( os.platform() ); //Returns a string identifying the operating system platform for which the Node.js binary was compiled
console.log( os.release() ); //Returns the operating system as a string.
console.log( os.tmpdir() ); //Returns the operating system's default directory for temporary files as a string.
console.log( os.totalmem() ); //Returns the total amount of system memory in bytes as an integer.
console.log( os.type() ); //Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
console.log( os.uptime() ); //Returns the system uptime in number of seconds.
console.log( os.userInfo() );
console.log( os.version() ); //Returns a string identifying the kernel version.
console.log( os.type() );
