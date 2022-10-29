# Express

## O que é o Express?

O Express é um framework para Node JS que permite criar aplicações web. O Express é um framework minimalista, ou seja, ele não possui muitas funcionalidades, mas ele permite que você crie aplicações web utilizando apenas o Node JS.

## Instalando o Express

Para instalar o express basta seguir o tutorial oficial do [Express](https://expressjs.com/pt-br/starter/installing.html).

# Primeiro contato com o Express

Para criar um servidor com o Express basta seguir o tutorial oficial do [Express](https://expressjs.com/pt-br/starter/hello-world.html).

Como o express é um módulo, basta utilizar o módulo dentro do seu arquivo JS.

```js
/* Chamamos o módulo express que está instalado no node_modules e o armazenamos na variável express. A variável express é um objeto que possui várias funções.
 */
const express = require('express');
// Armazena uma função do objeto express na variável app.
const app = express();
// Porta 3000
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Passamos a porta que o servidor irá escutar.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

No exemplo acima criamos um servidor que escuta a porta 3000 e quando o usuário acessar a rota `/` ele irá receber a mensagem `Hello World`. Para executar o servidor basta executar o comando `node nome_do_arquivo.js` no terminal. Note que primeiro fazemos a importação do módulo express e depois criamos uma instância do express. A instância do express é armazenada na variável `app` que é uma função. Em seguida, declaramos a variável port que irá armazenar a porta que o servidor irá escutar. Em seguida, usamos a função `app.get` para definir a rota `/` e a função que será executada quando o usuário acessar a rota. A função que será executada recebe dois parâmetros, o primeiro é o objeto `req` que contém informações sobre a requisição feita pelo usuário e o segundo é o objeto `res` que contém informações sobre a resposta que será enviada para o usuário. Por fim, usamos a função `app.listen` para iniciar o servidor na porta 3000. Além disso, a função listen deve ser a última função a ser executada, pois ela é responsável por iniciar o servidor. Por fim, o método **send** do objeto res é responsável por enviar a mensagem para o usuário.

## O que é uma porta?

A porta é um número que identifica um processo que está sendo executado no computador. Quando você acessa um site, por exemplo, o seu navegador faz uma requisição para o servidor que está hospedando o site. Quando o servidor recebe a requisição ele cria um processo para atender a requisição e retorna uma resposta para o navegador. Quando o navegador recebe a resposta ele exibe o site para você.

## Função de callback

A função de callback é uma função que é passada como parâmetro para outra função. A função que recebe a função de callback é responsável por executar a função de callback. No exemplo acima, a função `app.get` recebe uma função de callback que é executada quando o usuário acessa a rota `/`. A função `app.listen` também recebe uma função de callback que é executada quando o servidor é iniciado. Ou seja, uma função de callback é uma função que é executada sempre que um evento acontece.

## O que é uma rota?

```js
/* Chamamos o módulo express que está instalado no node_modules e o armazenamos na variável express. A variável express é um objeto que possui várias funções.
 */
const express = require('express');
// Armazena uma função do objeto express na variável app.
const app = express();
// Porta 3000
const port = 3000;

// Rota raiz
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Rota /sobre
app.get('/sobre', (req, res) => {
  res.send('Você está na rota sobre');
});

// Passamos a porta que o servidor irá escutar.
app.listen(port, () => {
  console.log(`Servidor rodanddo na url http://localhost:${port}`);
});
```

Uma rota é um caminho que o usuário deve acessar para que o servidor retorne uma resposta. Por exemplo, se o usuário acessar a rota `/` ele irá receber a mensagem `Hello World`. Se o usuário acessar a rota `/sobre` ele irá receber a mensagem `Você está na rota sobre`. No exemplo acima, a rota `/` é a rota raiz, ou seja, é a rota que o usuário acessa quando ele digita o endereço do site. A rota `/sobre` é uma rota que não é a rota raiz, ou seja, é uma rota que o usuário acessa quando ele digita o endereço do site seguido da rota. Por exemplo, se o usuário digitar `http://localhost:3000/sobre` ele irá acessar a rota `/sobre`.

Para se aprofundar mais, visite a [documentação oficial](https://expressjs.com/pt-br/guide/routing.html).

[Voltar](../README.md)
