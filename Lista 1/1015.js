var pointer1 = prompt().split(" ");
var pointer2 = prompt().split(" ");
var pointer1 = lines.shift().split(" ");
var pointer2 = lines.shift().split(" ");
console.log( Math.sqrt(Math.pow(parseFloat(pointer2[0])-parseFloat(pointer1[0]),2) + Math.pow(parseFloat(pointer2[1] ) - parseFloat(pointer1[1]),2)).toFixed(4));