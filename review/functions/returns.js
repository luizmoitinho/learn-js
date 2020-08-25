function soma(a,b){
  return a+b;
}

function createPessoa(nome,sobrenome){
  return {
    nome,sobrenome
  }
}

console.log(soma(2,1));

console.log('Criando uma pessoa');
console.log(createPessoa('luiz','moitinho'))


function falaFrase(comeco){
  function falaResto(resto){
    return comeco+''+resto
  }

  return falaResto;
}

const print = falaFrase('Opa');
console.log(print(', tudo bem?'))

console.log('===================================');


function createMultiply(arg){
  return  function multiply(n){
    return n * arg;
  }

}

const duplica = createMultiply(2);
const triplica = createMultiply(3);
const quadriplica = createMultiply(4);

console.log(duplica(1))
console.log(triplica(3))
console.log(quadriplica(5))