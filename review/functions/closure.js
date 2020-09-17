function retornaFuncao(nome){
  return function (){
    return nome;
  }
}


const funcao = retornaFuncao('luiz');
const funcao2 = retornaFuncao('Carlos');
console.log(funcao(),funcao2())