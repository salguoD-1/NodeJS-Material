// Importa o módulo http
const http = require('http');

// Cria um servidor HTTP
http
  .createServer((request, response) => {
    response.end('Hello World');
  })
  .listen(3000);
