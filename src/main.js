// Importamos o módulo do express
const express = require('express');
// Armazenamos a função express em uma constante
const app = express();
// Definimos a porta que o servidor irá escutar
const port = 3000;
// Importamos o módulo handlebars.
const handlebars = require('express-handlebars');

// Configurações
// Usando o handlebars como template engine.
// O main é o nome do arquivo que será o template principal.
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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
