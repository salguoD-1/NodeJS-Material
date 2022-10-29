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
