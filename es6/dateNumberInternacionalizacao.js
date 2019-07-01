
let date = new Date();

console.log(new Intl.DateTimeFormat('pt-BR').format(date));
console.log(new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date));
console.log(new Intl.DateTimeFormat('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' }).format(date));
console.log(new Intl.DateTimeFormat('en-US').format(date));

console.log(new Intl.NumberFormat('pt-BR').format(2.22));
console.log(new Intl.NumberFormat('pt-BR').format(2000.22));
console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000.2));
console.log(new Intl.NumberFormat('pt-BR', {maximumFractionDigits: 2, currency: 'BRL', style:'currency'}).format(2000.2));
