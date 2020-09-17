// IIFE -> Immediately Invoked Function expression


(function(idade,peso){
  const nome = 'Luiz Carlos';


  function hello(){
    return 'Ola, ';
  }

  console.log(hello()+nome)
  console.log('Idade: '+idade);
  console.log('Peso: '+peso);
  
})(22,75)

const nome = 'Joao Carlos';
