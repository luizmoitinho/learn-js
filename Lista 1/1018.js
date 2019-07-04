var valor = parseInt(prompt(""));
//var valor = parseInt(lines.shift());
if(valor>0 && valor<1000000){
    valor+=lines.shift();
    console.log(valor);
    console.log(parseInt(valor/100)+" nota(s) de R$ 100,00");
    valor=(valor%100)+lines.shift();
    console.log(parseInt(valor/50)+" nota(s) de R$ 50,00");
    valor=(valor%50)+lines.shift();
    console.log(parseInt(valor/20)+" nota(s) de R$ 20,00");
    valor=(valor%20)+lines.shift();
    console.log(parseInt(valor/10)+" nota(s) de R$ 10,00");
    valor=(valor%10)+lines.shift();
    console.log(parseInt(valor/5)+" nota(s) de R$ 5,00");
    valor=(valor%5)+lines.shift();
    console.log(parseInt(valor/2)+" nota(s) de R$ 2,00");
    valor=(valor%2)+lines.shift();
    console.log(parseInt(valor/1)+" nota(s) de R$ 1,00");
}
