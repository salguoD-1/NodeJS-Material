# Projeto

Projetinho que contém um formulário de cadastro de postagens.

## Handlebars

Handlebars é um template engine, ou seja, um motor de templates. Ele é um motor de templates que permite que você crie templates HTML com tags simples, que serão substituídas por valores reais quando o template for processado. Ele é baseado em JavaScript e é compatível com Node.js.

## Instalação

Para instalar o Handlebars, você deve ter o Node.js instalado em sua máquina. Acesse o [pacote npm](https://www.npmjs.com/package/express-handlebars) do Handlebars para mais informações.

## Configuração do projeto

```js
// Importamos o módulo do express
const express = require('express');
// Armazenamos a função express em uma constante
const app = express();
// Definimos a porta que o servidor irá escutar
const port = 3000;
// Importamos o módulo handlebars.
const handlebars = require('express-handlebars');
// Importamos o módulo dotenv
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente
dotenv.config();
// Importamos o módulo sequelize
const Sequelize = require('sequelize');

// Configurações
// Usando o handlebars como template engine.
// O main é o nome do arquivo que será o template principal.
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Passamos as configurações do banco de dados
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);
// Testa a conexão com o banco de dados.
sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado com sucesso.');
  })
  .catch((err) => {
    console.log('Erro ao conectar: ', err);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Importamos os módulos express, handlebars, dotenv e sequelize. O dotenv é um módulo que permite que você carregue variáveis de ambiente de um arquivo .env. O sequelize é um ORM (Object Relational Mapping) que permite que você trabalhe com bancos de dados relacionais de forma simples e fácil. O handlebars é um template engine que permite que você crie templates HTML com tags simples, que serão substituídas por valores reais quando o template for processado. Note que em seguida, nós usamos app.engine para definir o handlebars como template engine. O main é o nome do arquivo que será o template principal. Em seguida, usamos app.set para definir o handlebars como template engine. Por fim passamos as configurações do banco de dados para o sequelize. O sequelize.authenticate() é um método que testa a conexão com o banco de dados. Se a conexão for bem sucedida, ele irá exibir a mensagem “Conectado com sucesso.”, caso contrário, ele irá exibir a mensagem “Erro ao conectar: ” e o erro.

## Criando um formulário HTML

Para criar um formulário HTML, devemos criar um arquivo chamado form.handlebars na pasta views. Em seguida, adicione o seguinte código:

```html
<form action="/sucesso" method="POST">
  <label for="titulo">Título</label>
  <input type="text" name="titulo" />
  <label for="conteudo">Conteúdo</label>
  <textarea name="conteudo"></textarea>
  <button type="submit">Cadastrar postagem</button>
</form>
```

Note que o atributo action do formulário é o caminho para onde o formulário será enviado. Há duas formas de envio em HTML: GET e POST. A diferença é que GET envia os dados pela URL. Não é seguro. O método POST envia os dados de uma forma diferente, veremos mais adiante.

Além disso, criamos uma pasta chamada views na raiz do projeto. Dentro da pasta views, criamos um arquivo chamado main.handlebars. Em seguida, adicione o seguinte código:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Postagens NodeJS</title>
  </head>
  <body>
    {{{body}}}
  </body>
</html>
```

Usamos {{{body}}} para inserir o conteúdo do arquivo form.handlebars. O {{{body}}} é um helper do handlebars que permite que você insira o conteúdo de um arquivo. Note que estruturamos nossos arquivos usando diretórios com nomes sugestivos.

## Exibindo a estrutura do projeto

```js
// Importamos o módulo do express
const express = require('express');
// Armazenamos a função express em uma constante
const app = express();
// Definimos a porta que o servidor irá escutar
const port = 3000;
// Importamos o módulo handlebars.
const handlebars = require('express-handlebars');
// Importamos o módulo dotenv
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente
dotenv.config();
// Importamos o módulo sequelize
const Sequelize = require('sequelize');

// Configurações
// Usando o handlebars como template engine.
// O main é o nome do arquivo que será o template principal.
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Passamos as configurações do banco de dados
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);
// Testa a conexão com o banco de dados.
sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado com sucesso.');
  })
  .catch((err) => {
    console.log('Erro ao conectar: ', err);
  });

// Rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cadastro', (req, res) => {
  res.render('formulario');
});

/* Como usamos o método POST no nosso formulário, é necessário mudar o método na rota. */
app.post('/sucesso', (req, res) => {
  res.send('Formulário enviado com sucesso!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Note que criamos uma rota para o caminho /cadastro. Quando o usuário acessar o caminho /cadastro, o handlebars irá renderizar o arquivo form.handlebars. Em seguida, o handlebars irá inserir o conteúdo do arquivo form.handlebars no arquivo main.handlebars. Por fim, o handlebars irá enviar o conteúdo do arquivo main.handlebars para o navegador. Além disso, usamos o método post para a rota /sucesso. O método post é usado para enviar dados para o servidor. Por fim, perceba que usamos o método render para renderizar o arquivo form.handlebars.

NOTA: Não é possível acessar a rota utilizando o método post via barra de endereço do navegador(URL). O método post é utilizado para enviar dados para o servidor.
