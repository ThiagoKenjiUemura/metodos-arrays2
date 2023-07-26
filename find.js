// retorna o primeiro elemento encontrado do array, correspondente a condiçao implementada
// caso nao encontra, retorna undefined

const numeros = [1, 2, 3, 4, 5, 6];

let resultado = numeros.find((elementoAtual)=>{
return elementoAtual > 2
})

console.log(resultado);