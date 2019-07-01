
let array = [1,2,3,4,5,6];

let obj = {
    first_name: 'Luiz',
    last_name: 'Carlos',
};

for (let i in array) {
   console.log(i, array[i]);
}

for (let i in obj) {
    console.log(i, obj[i]);
}

for (const i of array) {
    console.log(i);
}

const keys = Object.keys(obj);
for (const key of keys) {
    console.log(obj[key]);
}

for(let [index, value] of array.entries()) {
    console.log(index,value)
}