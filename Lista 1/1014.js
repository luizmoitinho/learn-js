var X  = parseInt(lines.shift());
var Y  = parseFloat(lines.shift());
var consumo_medio = (X/Y.toFixed(1)).toFixed(3);
console.log(consumo_medio+" km/l");