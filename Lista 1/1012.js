var medida =  prompt().split(" ");
//var medida  = lines.shift().split(" ");
//var medida = parseFloat(lines.shift().split(" ").toFixed(1));

console.log("TRIANGULO: "+((medida[0]*medida[2])/2.0).toFixed(3));
console.log("CIRCULO: "+(3.14159*(Math.pow(medida[2],2))).toFixed(3));
console.log("TRAPEZIO: "+  (((parseFloat(medida[0])+parseFloat(medida[1]))*parseFloat(medida[2])) /2.0).toFixed(3) );
console.log("QUADRADO: "+(Math.pow(medida[1],2)).toFixed(3));
console.log("RETANGULO: "+(medida[0]*medida[1]).toFixed(3));