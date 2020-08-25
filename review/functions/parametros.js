function soma() {
  let total = 0;
  for (let elem of arguments)
    total += elem;
  console.log(total);

}
soma(1, 2, 3, 4);

function soma2(a = 0, b = 0) {
  console.log(a + b);
}
soma2(2);

function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let pessoa = {
  nome: 'luiz',
  sobrenome: 'carlos',
  idade: 22
};

funcao(pessoa);


console.log('------------------------------');
console.log('Rest operator => ...');
const conta = function(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, ...numeros)

  switch (operador) {
    case '+':
      for (let numero of numeros) {
        acumulador += numero;
      }
      break;
    case '-':
      for (let numero of numeros) {
        acumulador -= numero;
      }

      break;
    case '*':
      for (let numero of numeros) {
        acumulador *= numero;
      }

      break;
    case '/':
      for (let numero of numeros) {
        acumulador /= numero;
      }

      break;
    case '%':
      for (let numero of numeros) {
        acumulador %= numero;
      }

      break;

  }

  console.log('Resultado total da operação: ' + acumulador)
};

conta('+', 0, 10, 20, 30, 40, 50)

