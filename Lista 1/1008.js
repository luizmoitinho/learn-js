var number_employee = parseInt(lines.shift());
var employee_hours_job = parseInt(lines.shift());
var salary_employee = parseFloat(lines.shift()).toFixed(2);
console.log("NUMBER = "+number_employee);
console.log("SALARY = U$ "+(salary_employee*employee_hours_job).toFixed(2));