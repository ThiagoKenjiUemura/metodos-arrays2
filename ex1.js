const usuarios = [
    {nome: 'Joao', idade: 23 },
    {nome: 'Thiago', idade: 22},
    {nome: 'Larissa', idade: 20},
    {nome: 'Rodrigo', idade:18}
]

    function verificarIdade (usuarios){
    const resultado = usuarios.every((objeto)=>{
        return objeto.idade > 17;
    })

    if(resultado === true){
        console.log('Festa liberada!');
    }else{
        console.log('Possui menor de idade');
    }
}

verificarIdade(usuarios);


