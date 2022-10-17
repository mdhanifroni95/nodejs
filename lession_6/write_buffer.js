const { SERVFAIL } = require('dns');
const http = require('http');
const server = http.createServer((req, res) => {
 if (req.url == '/') {
  res.write('<html><head><title>Form</title></head></html>');
  res.write('<body><form method="POST" action="/process"><input name="massage"></form></body>');
  res.end();
 } else if (req.url == '/process' && req.method == "POST") {
  req.on('data', (chunk) => {
   console.log(chunk.toString());
  })
  res.write('thanks for response');
  res.end();
 } else {
  res.end();
 }
});
server.listen(3000);
console.log('this is listen 3000 port');