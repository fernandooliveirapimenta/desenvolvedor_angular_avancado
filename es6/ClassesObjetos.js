export var valor;

export class Pessoa {

    constructor(nome, altura, sexo) {
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    // getAltura () {
    //     return this.altura;
    // }

    get altura() {
        return this._altura;
    }

    set altura(value) {
        this._altura = value;
    };

}

const pessoa = new Pessoa('Fernando', 1.60, 'M');
console.log(pessoa);
console.log(pessoa.altura);
