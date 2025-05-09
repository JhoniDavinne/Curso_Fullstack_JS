try {
    console.log(forcandoErro);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
} catch (error) {
    console.log('Tratando o erro');
} finally {
    console.log('Finally: eu sempre sou executado');
}