## Usando o módulo sequelize

O módulo sequelize é um ORM (Object Relational Mapping) para Node.js. Ele permite que você interaja com bancos de dados relacionais, como MySQL, Postgres, SQLite e MariaDB, de uma forma simples e fácil.

Para instalar o módulo sequelize, execute o comando abaixo:

```bash
npm install --save sequelize
```

Para instalar o módulo mysql2 que é o driver do MySQL, execute o comando abaixo:

```bash
npm install --save mysql2
```

Instalando o módulo .env para carregar variáveis de ambiente do arquivo .env:

```bash
npm i dotenv
```

## Usando o módulo sequelize

```js
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente.
dotenv.config();
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
```

Note que estamos passando as variáveis de ambiente para o construtor do módulo sequelize. As variáveis de ambiente são carregadas do arquivo .env. O arquivo .env deve ser criado na raiz do projeto. O arquivo .env deve conter as seguintes variáveis de ambiente:

```bash
DB_HOST='qual maquina/server'
DB_USER='seu usuario'
DB_PASS='sua senha'
```

Nesse caso estamos rodando o MySQL localmente, por isso o host é `localhost`. Note que em dialect estamos passando o valor `mysql` para indicar que estamos usando o MySQL.

Por fim, note que usamos o método `authenticate()` para testar a conexão com o banco de dados. Se a conexão for bem sucedida, o método `then()` será executado. Caso contrário, o método `catch()` será executado. O método `then()` funciona como um callback que é executado quando a conexão é bem sucedida. O método `catch()` funciona como um callback que é executado quando a conexão falha.

## Usando o .gitignore para ignorar o arquivo .env

O arquivo .env deve ser ignorado pelo git. Para ignorar o arquivo .env, crie um arquivo chamado .gitignore na raiz do projeto e adicione o nome do arquivo .env nele.

## Models no Sequelize

O Sequelize trabalha com models. Um model é uma representação de uma tabela no banco de dados. Um model é criado a partir de uma classe que herda de Model. Criando uma **model chamada Postagem:**

```js
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente.
dotenv.config();
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

// Criando o model Postagem
const Postagem = sequelize.define('postagens', {
  // O campo titulo será do tipo VARCHAR
  titulo: {
    type: Sequelize.STRING,
  },
  // O campo conteudo será do tipo TEXT
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// O parâmetro force:true garante que nossa tabela seja criada.
Postagem.sync({ force: true });
```

Note que usamos o método `define()` para criar o model Postagem. O primeiro parâmetro é o nome da tabela. O segundo parâmetro é um objeto que contém os campos da tabela. O método `sync()` é usado para sincronizar o model com o banco de dados. O parâmetro force:true garante que a tabela seja criada. Nesse caso criamos duas colunas na tabela postagens: titulo e conteudo. A diferença entre STRING e TEXT é que o primeiro é uma string de tamanho fixo e o segundo é uma string de tamanho variável. Por fim, usamos show tables para verificar se a tabela foi criada e em seguida, usamos describe para verificar as colunas da tabela.

```sql
mysql> SHOW TABLES;
+-----------------------------+
| Tables_in_sistemadecadastro |
+-----------------------------+
| postagens                   |
| usuarios                    |
+-----------------------------+
2 rows in set (0.00 sec)

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

Note que a tabela foi criada com os campos id, titulo, conteudo, createdAt e updatedAt. O campo id é criado automaticamente pelo Sequelize. Os campos createdAt e updatedAt são criados automaticamente pelo Sequelize para armazenar a data de criação e a data de atualização do registro. São campos de controle do Sequelize.

Veremos mais sobre **id, createdAt, updatedAt, auto increment e primary key mais adiante.**

## Criando o model Usuario

```js
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente.
dotenv.config();
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

// Criando o model Postagem
const Postagem = sequelize.define('postagens', {
  // O campo titulo será do tipo VARCHAR
  titulo: {
    type: Sequelize.STRING,
  },
  // O campo conteudo será do tipo TEXT
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Criando o model Usuario
const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});
// Usamos o método sync() para sincronizar o model com o banco de dados.
Usuario.sync({ force: true }).then(() => {
  console.log('Tabelas criadas.');
});
```

Confere se a tabela foi criada:

```sql
mysql> SHOW TABLES;
+-----------------------------+
| Tables_in_sistemadecadastro |
+-----------------------------+
| postagens                   |
| usuarios                    |
+-----------------------------+
2 rows in set (0.00 sec)

mysql> DESCRIBE usuarios;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| nome      | varchar(255) | YES  |     | NULL    |                |
| sobrenome | varchar(255) | YES  |     | NULL    |                |
| idade     | int          | YES  |     | NULL    |                |
| email     | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
7 rows in set (0.00 sec)
```

## Inserindo dados no model Postagem

```js
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente.
dotenv.config();
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

// Criando o model Postagem
const Postagem = sequelize.define('postagens', {
  // O campo titulo será do tipo VARCHAR
  titulo: {
    type: Sequelize.STRING,
  },
  // O campo conteudo será do tipo TEXT
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Registrando uma nova postagem

Postagem.create({
  titulo: 'Título da postagem',
  conteudo: 'Conteúdo da postagem',
});

// Criando o model Usuario
const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

// Comentei o código abaixo para não criar a tabela novamente.
/* Usuario.sync({ force: true }).then(() => {
  console.log('Tabelas criadas.');
}); */
```

O nodemon acabou inserindo três vezes o mesmo registro por conta do auto reload

```sql
mysql> SELECT * FROM postagens;
+----+--------------------+----------------------+---------------------+---------------------+
| id | titulo             | conteudo             | createdAt           | updatedAt           |
+----+--------------------+----------------------+---------------------+---------------------+
|  1 | Título da postagem | Conteúdo da postagem | 2022-10-29 16:03:43 | 2022-10-29 16:03:43 |
|  2 | Título da postagem | Conteúdo da postagem | 2022-10-29 16:03:44 | 2022-10-29 16:03:44 |
|  3 | Título da postagem | Conteúdo da postagem | 2022-10-29 16:03:50 | 2022-10-29 16:03:50 |
+----+--------------------+----------------------+---------------------+---------------------+
3 rows in set (0.00 sec)
```

## Inserindo dados no model Usuario

```js
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
// Carrega as variáveis de ambiente.
dotenv.config();
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

// Criando o model Postagem
const Postagem = sequelize.define('postagens', {
  // O campo titulo será do tipo VARCHAR
  titulo: {
    type: Sequelize.STRING,
  },
  // O campo conteudo será do tipo TEXT
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Registrando uma nova postagem

Postagem.create({
  titulo: 'Título da postagem',
  conteudo: 'Conteúdo da postagem',
}).then(() => {
  console.log('Postagem criada com sucesso!');
});

// Criando o model Usuario
const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

// Inserindo um novo usuário no banco de dados
Usuario.create({
  nome: 'Douglas',
  sobrenome: 'Cunha de Jesus',
  idade: 23,
  email: 'douglas@gmail.com',
}).then(() => {
  console.log('Usuário criado com sucesso!');
});

/* Usuario.sync({ force: true }).then(() => {
  console.log('Tabelas criadas.');
}); */
```

Exibindo os dados do model Postagem e Usuario

```sql
mysql> SELECT * FROM POSTAGENS;
+----+--------------------+----------------------+---------------------+---------------------+
| id | titulo             | conteudo             | createdAt           | updatedAt           |
+----+--------------------+----------------------+---------------------+---------------------+
| 15 | Título da postagem | Conteúdo da postagem | 2022-10-29 16:09:43 | 2022-10-29 16:09:43 |
+----+--------------------+----------------------+---------------------+---------------------+
1 row in set (0.00 sec)

mysql> SELECT * FROM usuarios;
+----+---------+----------------+-------+-------------------+---------------------+---------------------+
| id | nome    | sobrenome      | idade | email             | createdAt           | updatedAt           |
+----+---------+----------------+-------+-------------------+---------------------+---------------------+
|  1 | Douglas | Cunha de Jesus |    23 | douglas@gmail.com | 2022-10-29 16:09:43 | 2022-10-29 16:09:43 |
+----+---------+----------------+-------+-------------------+---------------------+---------------------+
1 row in set (0.00 sec)
```

[Voltar](../README.md)
