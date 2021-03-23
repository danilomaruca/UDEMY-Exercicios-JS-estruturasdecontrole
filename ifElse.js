const imprimirResultado = function(nota) {
    if(nota >= 7) {      // se tiver apenas uma sentença não há necessidade de {}
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!! evitar este tipo de dado diferente de um nº inteiro