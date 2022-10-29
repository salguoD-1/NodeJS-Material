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

// Passamos a porta que o servidor irá escutar.
app.listen(port, () => {
  console.log(`Servidor rodanddo na url http://localhost:${port}`);
});
