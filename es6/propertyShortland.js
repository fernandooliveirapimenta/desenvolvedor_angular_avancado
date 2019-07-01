
let first_name = 'luiz', last_name='diniz';

let obj = {
    first_name,
    last_name,
    andar(p1, p2) {
        console.log(p1,p2);
    }
};

obj.andar(3,3);

function voar({first_name}) {
    console.log(first_name);
}

voar(obj);