// executa a funçao declarada no argumento da funçao callback, como por exemplo , multiplicar todo o array

const numeros = [1, 2, 3];

const dobro = numeros.map((numero)=>{
    return numero * 2
})

console.log(dobro);