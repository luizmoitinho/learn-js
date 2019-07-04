var values = prompt().split(" ");
//var values = lines.shift().split(" ");

var MaiorAb = (parseInt(values[0])+parseInt(values[1])+Math.abs(parseInt(values[0])-parseInt(values[1])))/2;
var MaiorABC =  (parseInt(MaiorAb) + parseInt(values[2])+Math.abs(parseInt(MaiorAb) - parseInt(values[2]) ))/2;
console.log( MaiorABC +" eh o maior");