# Retornando um arquivo HTML

Para retornar um arquivo html fazemos uso do método `sendFile` do objeto `response` do express.

```js
/* Chamamos o módulo express que está instalado no node_modules e o armazenamos na variável express. A variável express é um objeto que possui várias funções.
 */
const express = require('express');
// Armazena uma função do objeto express na variável app.
const app = express();
// Porta 3000
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/sobre', (req, res) => {
  res.send('Você está na rota sobre');
});

app.get('/ola/:nome', (req, res) => {
  res.send(`Olá ${req.params.nome}, seja bem vindo(a)!`);
});

// Passamos a porta que o servidor irá escutar.
app.listen(port, () => {
  console.log(`Servidor rodanddo na url http://localhost:${port}`);
});
```

Além disso, note que usamos \_\_dirname para indicar o diretório atual. Isso é necessário para que o arquivo seja encontrado. Caso contrário, o arquivo não será encontrado. Por fim passamos o arquivo que queremos enviar. Nesse caso o arquivo index.html. O arquivo index.html deve estar na mesma pasta do arquivo que estamos executando. Note que usamos um barra antes /index.html. Isso é necessário para que o arquivo seja encontrado.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu app!</title>
  </head>
  <body>
    <h1>Olá, seja bem vindo ao meu app!</h1>
    <h2>Meu nome é douglas!</h2>
  </body>
</html>
```
