//forma mais oficial de estrutura de repetição
let contador = 1        //contador, variável que irá controlar o laço
while(contador <= 10) {     //expressão
    console.log (`contador = ${contador}`)
    contador++          //incremento
}

for(let i = 1; i <= 10; i++) {      //contador, expressão e incremento juntos
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]         //array
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}