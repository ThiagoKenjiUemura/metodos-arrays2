const usuarios = [
    {nome: 'joao', idade: 23},
    {nome: 'maria', idade: 18},
    {nome: 'ana', idade: 30},
    {nome: 'thiago', idade: 17}
];

let resultado = usuarios.find((usuario)=>{
    return usuario.nome === 'joao';
})

console.log(resultado);