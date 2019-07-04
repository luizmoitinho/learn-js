// var A =  parseFloat(lines.shift()).toFixed(2);
// var B =  parseFloat(lines.shift()).toFixed(2);
// var C =  parseFloat(lines.shift()).toFixed(2);
var A =  parseFloat(prompt());
var B =  parseFloat(prompt());
var C =  parseFloat(prompt());
//intervalo de notas
if((A>=0 && A<=10) &&  (B>=0 && B<=10) && (C>=0 && C<=10))
console.log("MEDIA = "+ (( A*2 + B*3 + C*5 )/10).toFixed(1));