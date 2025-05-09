function recursiva(max) {
    if (max >= 10) return 
    max++
    console.log(max);
    recursiva(max); //a funcao fica se chamando ate 'max' ser maior ou igual 10
}

recursiva(-10);