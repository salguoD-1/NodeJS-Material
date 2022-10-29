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
