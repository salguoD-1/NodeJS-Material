/* Importamos as funções do módulo aritimetica_basica.js usando a função require() e atribuimos a uma constante. Nesse caso usamos o destructuring para importar apenas as funções que precisamos. */
const {
  addition,
  subtraction,
  multiplication,
  division,
} = require('./aritimetica_basica');

const x = 10;
const y = 5;

console.log(addition(x, y));
console.log(subtraction(x, y));
console.log(multiplication(x, y));
console.log(division(x, y));
