// switch é feito para multiplas seleções sem necessidade de usar if else if
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {         //floor = arredondar para baixo
        case 10:        //para cada case pode-se ter várias sentenças
        case 9:
            console.log('Quadro de Honra')
            break       //padrão a ser utilizado ao final de cada case para sair do mesmo
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
