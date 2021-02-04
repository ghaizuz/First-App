const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('I am Renato Bucao Jr. From GSC 2nd Year BSIT \n \n WELCOME TO MAY APP \n \n Hello World and Hellow Earth');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});