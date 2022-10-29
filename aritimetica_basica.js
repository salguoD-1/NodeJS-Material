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
