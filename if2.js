function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log('Final') // sentaça fora do if, sempre será executada independente da condição
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {    // cuidado com ";", não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)  //por mais que não atenda a condição if, será exibido devido o uso indevido do ";"
teste2(8)