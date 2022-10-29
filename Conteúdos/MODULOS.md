# Módulos

Módulos é uma forma de **"dividir"** o seu código em partes menores, para que você possa reutilizar essas partes em outros projetos.

No exemplo abaixo temos um arquivo JavaScript chamado aritmetica_basica.js que contém quatro funções: soma, subtracao, multiplicacao e divisao.

```js
// Retorna a soma entre os dois argumentos
const addition = (a, b) => {
  return a + b;
};

// Retorna a subtração entre os dois argumentos
const subtraction = (a, b) => {
  return a - b;
};

// Retorna a multiplicação entre os dois argumentos
const multiplication = (a, b) => {
  return a * b;
};

// Retorna a divisão entre os dois argumentos
const division = (a, b) => {
  return a / b;
};

/* Module.exports é um objeto que representa o módulo atual e é retornado como resultado da chamada require(), nesse caso exporta as 4 funções acima. */
module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
```

Note que esse arquivo é exportado como um módulo, e para importar esse módulo em outro arquivo, basta usar a função require().

Em seguida temos nosso arquivo principal(calculadora.js), que é o arquivo que vai usar as funções do arquivo aritmetica_basica.js.

```js
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
```

Note que usamos o destructuring para importar apenas as funções que precisamos. Em seguida usamos as funções que importamos para fazer os cálculos.

[Voltar](../README.md)
