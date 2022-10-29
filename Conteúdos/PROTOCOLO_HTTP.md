# Protocolo HTTP

## O que é HTTP?

HTTP é um protocolo de comunicação entre cliente e servidor, que permite a transferência de dados entre eles. O HTTP é baseado em uma arquitetura cliente-servidor, onde o cliente faz uma requisição e o servidor responde a essa requisição.

## Como funciona o HTTP?

O HTTP funciona através de requisições e respostas. O cliente faz uma requisição e o servidor responde a essa requisição. A requisição é feita através de um método HTTP, que é um verbo que indica a ação que o cliente deseja realizar no servidor. A resposta é feita através de um código de status HTTP, que é um número que indica o status da requisição.

## Métodos HTTP

Os métodos HTTP são os verbos que indicam a ação que o cliente deseja realizar no servidor. Os métodos HTTP mais utilizados são:

- GET: utilizado para buscar informações no servidor.

- POST: utilizado para enviar informações para o servidor.

- PUT: utilizado para atualizar informações no servidor.

- DELETE: utilizado para deletar informações no servidor.

## Códigos de status HTTP

Os códigos de status HTTP são os números que indicam o status da requisição. Os códigos de status HTTP mais utilizados são:

- 200: indica que a requisição foi bem sucedida.

- 201: indica que a requisição foi bem sucedida e que um novo recurso foi criado.

- 400: indica que a requisição não foi bem sucedida devido a um erro do cliente.

- 401: indica que a requisição não foi bem sucedida devido a um erro de autenticação.

- 404: indica que a requisição não foi bem sucedida devido a um erro de rota.

- 500: indica que a requisição não foi bem sucedida devido a um erro do servidor.

## Exemplo de requisição HTTP usando o módulo http

O módulo http faz parte no **core** do Node JS, ou seja, não é necessário instalar o módulo para utilizá-lo. O módulo http permite que você crie um servidor HTTP e faça requisições HTTP.

```js
// Importa o módulo http
const http = require('http');

// Cria um servidor HTTP
http.createServer() => {
  // Código vai aqui
}).listen(3000);
```

Note que no exemplo acima nós criamos um servidor HTTP utilizando o método `createServer()`. O método `createServer()` recebe uma função como parâmetro, que é executada sempre que uma requisição é feita para o servidor. O método `listen()` é utilizado para iniciar o servidor HTTP na porta 3000.

## Rodando o servidor HTTP

```js
// Importa o módulo http
const http = require('http');

// Cria um servidor HTTP
http
  .createServer((request, response) => {
    response.end('Hello World');
  })
  .listen(3000);
```

O parâmetro `request` é um objeto que contém informações sobre a requisição feita pelo cliente. O parâmetro `response` é um objeto que contém métodos para enviar uma resposta para o cliente. O método `end()` é utilizado para enviar uma resposta para o cliente. Neste exemplo nós enviamos a string 'Hello World' para o cliente.

Quando rodamos o código acima, o servidor HTTP fica escutando na porta 3000. Nesse caso podemos acessar utilizando o navegador através da URL `http://localhost:3000`. Quando acessamos a URL, o servidor HTTP recebe a requisição e envia a resposta para o cliente. No entanto, é necessário reiniciar o servidor toda vez que fizermos uma alteração no código.

[Voltar](../README.md)