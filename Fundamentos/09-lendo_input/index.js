const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual é seu nome?', (name) => {
    if (name === 'Lucas') {
        console.log(`${name}, que nome bosta`)

    } else {
        console.log(`Seu nome é: ${name}`)
    }
    readline.close()
})


setTimeout(() => {
    console.clear()
}, 10000)