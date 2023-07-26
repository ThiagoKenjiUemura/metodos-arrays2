const carros = [
    {nome: 'Onix', marca: 'Chevrolet', ano: 2022, cor: 'azul'},
    {nome: '320i', marca: 'BMW', ano: 2021, cor: 'preta'},
    {nome: '911', marca: 'Porsche', ano: 2023, cor: 'cinza'},
    {nome: 'Pulse', marca: 'Fiat', ano: 2022, cor: 'prata'}
]


    function buscarCarro(marca, arrayDeCarros){
        const resultado = arrayDeCarros.find((carro) => {
return carro.marca === marca;
        })
        console.log(resultado)
    }

    buscarCarro('Porsche', carros)