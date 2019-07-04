var first_piece =  prompt().split(" ");
var second_piece = prompt().split(" ");

var first_piece =  lines.shift().split(" ");
var second_piece = lines.shift().split(" ");

console.log("VALOR A PAGAR: R$ "+ ((first_piece[1]*first_piece[2]) + (second_piece[1]*second_piece[2])).toFixed(2) );

