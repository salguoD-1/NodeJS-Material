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

## Reoganizando o projeto

O projeto foi reoganizado para melhorar a estrutura do projeto.

A pasta models foi criada para armazenar os modelos do banco de dados. O arquivo Post.js foi criado dentro da pasta models. O arquivo Post.js contém o modelo do banco de dados. Já o arquivo db.js possui as configurações do banco de dados.

Foi criado um banco de dados para esse projeto. O nome do banco de dados é postapp e o nome da tabela é postagens.

```sql
mysql> USE postapp;
Database changed
mysql> SHOW TABLES;
+-------------------+
| Tables_in_postapp |
+-------------------+
| postagens         |
+-------------------+
1 row in set (0.00 sec)

mysql> DESCRIBE postagens;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| titulo    | varchar(255) | YES  |     | NULL    |                |
| conteudo  | text         | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
```

O banco de dados ficou descrito da forma acima.

O arquivo db.js ficou da seguinte forma

```js
// Importamos o módulo dotenv
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente
dotenv.config({ path: '../.env' });
// Importamos o módulo sequelize
const Sequelize = require('sequelize');

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

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
```

Já o arquivo Post.js ficou da seguinte forma

```js
const db = require('./db');

const Post = db.sequelize.define('postagens', {
  titulo: {
    type: db.Sequelize.STRING,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
  },
});

// Como a tabela ja foi criada, comentamos a linha abaixo.
// Post.sync({ force: true });

// Exportando o nosso model Post.
module.exports = Post;
```

O nosso arquivo principal é o main.js. O arquivo main.js ficou da seguinte forma

```js
// Importamos o módulo do express
const express = require('express');
// Armazenamos a função express em uma constante
const app = express();
// Definimos a porta que o servidor irá escutar
const port = 3000;
// Importamos o módulo handlebars.
const handlebars = require('express-handlebars');
// Importamos o módulo body-parser
const bodyParser = require('body-parser');
// Importamos o módulo Post.
const Post = require('../models/Post');

// Configurações
// Usando o handlebars como template engine.
// O main é o nome do arquivo que será o template principal.
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cadastro', (req, res) => {
  res.render('formulario');
});

/* Como usamos o método POST no nosso formulário, é necessário mudar o método na rota. */
app.post('/sucesso', (req, res) => {
  // Passamos os dados do formulário para o model Post.
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  }) // Após o processamento dos dados, teremos uma resposta.
    .then(() => {
      res.send('Post criado com sucesso!');
    })
    .catch((err) => {
      res.send(`Erro ao criar post: ${err}`);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Após ir na rota /cadastro e enviar os dados para o servidor, temos que seremos redirecionados para a rota /sucesso. A rota /sucesso irá criar um post no banco de dados. Vamos conferir se o post foi criado:

```sql
mysql> SELECT * FROM postagens;
+----+---------------------+-------------------------+---------------------+---------------------+
| id | titulo              | conteudo                | createdAt           | updatedAt           |
+----+---------------------+-------------------------+---------------------+---------------------+
|  1 | JavaScript é legal! | NodeJS é uma delicinha! | 2022-10-29 21:47:15 | 2022-10-29 21:47:15 |
+----+---------------------+-------------------------+---------------------+---------------------+
1 row in set (0.00 sec)
```

Como visto o post foi criado com sucesso.

Note que usamos o módulo body-parser para pegar os dados do formulário. O módulo body-parser é um módulo que faz o parse dos dados do formulário. Ele é muito útil para pegar os dados do formulário e passar para o servidor.

## Redirecionando para a pagina home

Para redirecionar para a página home, vamos usar o método redirect do objeto res. O método redirect recebe como parâmetro a rota para onde queremos redirecionar.

```js
// Importamos o módulo do express
const express = require('express');
// Armazenamos a função express em uma constante
const app = express();
// Definimos a porta que o servidor irá escutar
const port = 3000;
// Importamos o módulo handlebars.
const handlebars = require('express-handlebars');
// Importamos o módulo body-parser
const bodyParser = require('body-parser');
// Importamos o módulo Post.
const Post = require('../models/Post');

// Configurações
// Usando o handlebars como template engine.
// O main é o nome do arquivo que será o template principal.
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

// Rota home
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cadastro', (req, res) => {
  res.render('formulario');
});

/* Como usamos o método POST no nosso formulário, é necessário mudar o método na rota. */
app.post('/sucesso', (req, res) => {
  // Passamos os dados do formulário para o model Post.
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  }) // Após o processamento dos dados, teremos uma resposta.
    .then(() => {
      // Redirecionamos o usuário para a página home.
      res.redirect('/');
    })
    .catch((err) => {
      res.send(`Erro ao criar post: ${err}`);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Note que redirecionamos o usuário para a rota /. Toda vez que o usuário enviar o formulário, ele será redirecionado para a página home. Vamos conferir?

```sql
mysql> SELECT * FROM postagens;
+----+------------------------+----------------------------------------------+---------------------+---------------------+
| id | titulo                 | conteudo                                     | createdAt           | updatedAt           |
+----+------------------------+----------------------------------------------+---------------------+---------------------+
|  1 | JavaScript é legal!    | NodeJS é uma delicinha!                      | 2022-10-29 21:47:15 | 2022-10-29 21:47:15 |
|  2 | Olá, sou eu novamente! | Adicionamos o redirecionamento nesse post ;) | 2022-10-29 21:54:10 | 2022-10-29 21:54:10 |
+----+------------------------+----------------------------------------------+---------------------+---------------------+
2 rows in set (0.00 sec)
```

Como podemos ver, o post foi criado com sucesso e o usuário foi redirecionado para a página home.

## Exibindo os dados do banco de dados na página home

Para exibir os dados do banco de dados na página home, vamos usar o método findAll do model Post. O método findAll irá retornar todos os posts do banco de dados. Vamos ver como fazer isso:

```js
// Importamos o módulo do express
const express = require('express');
// Armazenamos a função express em uma constante
const app = express();
// Definimos a porta que o servidor irá escutar
const port = 3000;
// Importamos o módulo handlebars.
const handlebars = require('express-handlebars');
// Importamos o módulo body-parser
const bodyParser = require('body-parser');
// Importamos o módulo Post.
const Post = require('../models/Post');

// Configurações
// Usando o handlebars como template engine.
// O main é o nome do arquivo que será o template principal.
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

// Rota home
app.get('/', (req, res) => {
  // Passamos todos os posts como parâmetro
  Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
    // Passamos o objeto posts para a view home.handlebars
    res.render('home', { posts: posts });
  });
});

app.get('/cadastro', (req, res) => {
  res.render('formulario');
});

/* Como usamos o método POST no nosso formulário, é necessário mudar o método na rota. */
app.post('/sucesso', (req, res) => {
  // Passamos os dados do formulário para o model Post.
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  }) // Após o processamento dos dados, teremos uma resposta.
    .then(() => {
      // Redirecionamos o usuário para a página home.
      res.redirect('/');
    })
    .catch((err) => {
      res.send(`Erro ao criar post: ${err}`);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Note que fizemos algumas alterações como a ordenação dos posts por id e a passagem do objeto posts para a view home.handlebars. Além disso, usamos o método findAll para buscar todos os posts do banco de dados. Vamos ver como ficou a view home.handlebars:

```html
<h1>Lista de posts:</h1>

<!-- #each atua como uma estrutura de repetição -->
{{#each posts}}
<h1>{{titulo}}</h1>
<p>{{conteudo}}</p>
<p>{{createdAt}}</p>
<hr />
{{/each}}
```

Note que usamos o #each para iterar sobre o objeto posts.

## Deletando posts

Para deletar posts, vamos usar o método destroy do model Post. O método destroy irá deletar um post do banco de dados. Vamos ver como fazer isso:

```js
// Importamos o módulo do express
const express = require('express');
// Armazenamos a função express em uma constante
const app = express();
// Definimos a porta que o servidor irá escutar
const port = 3000;
// Importamos o módulo handlebars.
const handlebars = require('express-handlebars');
// Importamos o módulo body-parser
const bodyParser = require('body-parser');
// Importamos o módulo Post.
const Post = require('../models/Post');

// Configurações
// Usando o handlebars como template engine.
// O main é o nome do arquivo que será o template principal.
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

// Rota home
app.get('/', (req, res) => {
  // Passamos todos os posts como parâmetro
  Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
    // Passamos o objeto posts para a view home.handlebars
    res.render('home', { posts: posts });
  });
});

app.get('/cadastro', (req, res) => {
  res.render('formulario');
});

/* Como usamos o método POST no nosso formulário, é necessário mudar o método na rota. */
app.post('/sucesso', (req, res) => {
  // Passamos os dados do formulário para o model Post.
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  }) // Após o processamento dos dados, teremos uma resposta.
    .then(() => {
      // Redirecionamos o usuário para a página home.
      res.redirect('/');
    })
    .catch((err) => {
      res.send(`Erro ao criar post: ${err}`);
    });
});

// Deletando postagens
app.get('/deletar/:id', (req, res) => {
  // O método destroy recebe um objeto com o id do post que será deletado.
  // A chave where possui um objeto com o id do post.
  Post.destroy({ where: { id: req.params.id } })
    .then(() => {
      // Redirecionamos o usuário para a página home.
      res.redirect('/');
    })
    .catch((erro) => {
      res.send('Esta postagem não existe!');
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Note que usamos o método destroy do model Post. O método destroy recebe um objeto com o id do post que será deletado. A chave where possui um objeto com o id do post. Além disso, usamos o req.params.id para pegar o id do post que será deletado. Vamos ver como ficou a view home.handlebars:

```html
<h1>Lista de posts:</h1>

<!-- #each atua como uma estrutura de repetição -->
{{#each posts}}
<h1>{{titulo}}</h1>
<p>{{conteudo}}</p>
<p>{{createdAt}}</p>
<!-- Passams um href com a rota /deletar seguido do id de cada post. -->
<a href="/deletar/{{id}}"><button>Deletar Post</button></a>
<hr />
{{/each}}
```

Note que usamos o #each para iterar sobre o objeto posts. Além disso, passamos um href com a rota /deletar seguido do id de cada post. A cada clique no botão, o usuário irá deletar o post e será redirecionado para a página home.
