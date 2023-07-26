// array.some() -> testa se pelo menos um dos elementos do array passam pela condição determinada, retornando um valor booleano 

const nome = ['Thiago', 'Larissa', 'Melissa', 'Lucas', 'Mirella']

const resultado = nome.some((nome) => {
return nome === 'Thiago';
})

console.log(resultado);