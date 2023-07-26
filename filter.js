// cria um novo o array com todos os elementos correspondentes a condição
// caso nao encontra retorna um array vazio
const numeros = [1, 2, 3, 4];

let resultado = numeros.filter((numero)=>{
    return numero > 2;
})

console.log(resultado);