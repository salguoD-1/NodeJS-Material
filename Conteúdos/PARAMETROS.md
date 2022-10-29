# O que são parâmetros?

Parâmetros são variáveis que podem ser usadas em uma função. Vejamos na prática

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

app.get('/sobre', (req, res) => {
  res.send('Você está na rota sobre');
});

// Parâmetro nome
app.get('/ola/:nome', (req, res) => {
  res.send(`Olá ${req.params.nome}, seja bem vindo(a)!`);
});

// Passamos a porta que o servidor irá escutar.
app.listen(port, () => {
  console.log(`Servidor rodanddo na url http://localhost:${port}`);
});
```

No exemplo acima passamos o parâmetro `nome` na `rota /ola/:nome`. O parâmetro nome é passado na url, como no exemplo abaixo:

```
http://localhost:3000/ola/douglas
```

Note que passamos douglas como argumento para o parâmetro.

O parâmetro nome é acessado através do `objeto req.params.nome`. O objeto req.params é um objeto que possui todos os parâmetros passados na url.

**NOTA:** Só podemos usar a função `send` uma vez dentro de uma rota. Se tentarmos usar mais de uma vez, o servidor irá dar erro.

[Voltar](../README.md)
