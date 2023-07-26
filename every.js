// array.every() -> testa se todos os elementos do array passam pela condição determinada, retornando um valor booleano 

const frutas = ['abacaxi', 'manga', 'melancia'];
const resultado = frutas.every((elementoAtual) => {
    return elementoAtual !== 'banana'
})

console.log(resultado);