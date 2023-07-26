//retorna o indice do primeiro elemento do array encontrado , correspondente a condiçao implementada
//retorna -1 caso nao ache o elemento
const carros = [
    {nome: 'Onix', marca: 'Chevrolet', ano: 2022, cor: 'azul'},
    {nome: '320i', marca: 'BMW', ano: 2021, cor: 'preta'},
    {nome: '911', marca: 'Porsche', ano: 2023, cor: 'cinza'},
    {nome: 'Pulse', marca: 'Fiat', ano: 2022, cor: 'prata'}
];

const resultado = carros.findIndex((carro)=>{
return carro.nome === 'Onix';
})

console.log(resultado)