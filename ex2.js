const arquivos = ['arquivo1.js','arquivo2.bat','arquivo3.python']

const resultado = arquivos.some((arquivo) => {
    const existeExt = arquivo.indexOf('.bat');

    return existeExt !== -1;
})

if( resultado === true){
    console.log('Vírus detectado');
} else {
    console.log('nenhum vírus encontrado')
}