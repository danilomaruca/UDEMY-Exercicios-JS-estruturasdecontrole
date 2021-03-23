const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break           //interrompe a repetição e vai para próxima sentença fora do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue        //interrompe a repetição atual e vai para a próxima dentro do laço
    }
    console.log(`${y} = ${nums[y]}`)
}

//evitar utilizar este tipo de código por ser desorganizado e difícil de manutenção
externo: 
for (let a in nums) {
    for (let b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}