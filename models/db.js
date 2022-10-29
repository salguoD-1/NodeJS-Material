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
