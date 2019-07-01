
const array = [1,2,3,4];

let f = array.map(function (value) {
    return value * 10;
});

const f2 =array.map( v => v * 10);
const f3 =array.map( (v, i) => {
    console.log(i);
    return v * 2;
});

console.info(f);
console.info(f2);
console.info(f3);

let variavel = (v, i) => v + i;

console.log(variavel(5,5));
