function criaPessoa(nome, sobrenome,altura=0, peso=0){
  return{
    nome, 
    sobrenome,

    //getter
    get nomeCompleto(){
      return  `${this.nome} ${this.sobrenome}`
    },

    //setter
    set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    
    fala: function(assunto = "sobre nada"){
      return `${this.nome} está falando ${assunto}`
    },
    
    get imc(){
      return ( this.peso / (this.altura**2)).toFixed(3)
    },
    altura:altura,
    peso : peso
  }
}
const p1 = criaPessoa('Luiz','Moitinho',1.70,70)
// console.log(p1.fala('sobre JS'))
// console.log('IMC do '+p1.nome+' é '+p1.imc)

p1.nomeCompleto = 'Fernanda Souza'

console.log('Nome completo: '+p1.nomeCompleto)
console.log(p1.fala())