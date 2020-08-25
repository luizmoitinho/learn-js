hello();


function hello(){
  console.log('Hellow World');
}

const dice = () =>{
  console.log('dice')
}

function executaFuncao(funcao){
  console.log('Executando uma função por parâmetro.');
  funcao();

}

executaFuncao(dice);

//Arrows function
const arrow = ()=>{
  console.log('Criando uma arrow function. Aqui não é permitido usar o \'this\''); 
}

arrow();

//Funções dentro de objetos

const Pessoa ={
  falar(){
    console.log('Obj Pessoa falando');
  }
}

Pessoa.falar();