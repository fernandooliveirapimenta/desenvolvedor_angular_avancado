

function funcao(param1, param2, ...otherParamns) {

    // let args = Array.prototype.slice.call(arguments, funcao.length);
    console.log(otherParamns);
}

funcao(1,2,3,4);

let array1 = [1,2,3,4];
let array2 = [1,2,3,4, ...array1];

console.log(array2);
