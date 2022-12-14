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
