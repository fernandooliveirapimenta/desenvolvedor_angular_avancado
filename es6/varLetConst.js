//var com var podemos redeclarar a variavel e isso não é muito legal,
// com var agt acaba perdendo um pouco do controle
// os dados podem ficar inconsistentes
// var o contexto é elevado
// baixa performance com gerenciamento de memoria.
function test() {
    var a = 'outro valor';
    if(1<2){
        var a = 'valor';
    }
    console.log(a);

}


//let variavel respeita o contexto local, ex dentro do if não acessa fora
// otimiza o script

function testLet() {
    let v = 'outro valor';

    if(true) {
        let v = 'dd';
    }
    console.log(v);
}


//const endereço unico na memoria constante durante a vida do app
// não posse reatribuir valor para uma variavel const
function testConst() {

    const fernando = 455;

    // fernando = 88;
    
}