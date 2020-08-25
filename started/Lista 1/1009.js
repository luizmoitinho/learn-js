var nome = lines.shift();
var salario_fixo = parseFloat(lines.shift());
var total_dinheiro_vendas = parseFloat(lines.shift());
salario_fixo += 0.15*total_dinheiro_vendas;
console.log("TOTAL = R$ "+salario_fixo.toFixed(2));