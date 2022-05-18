const chalk = require('chalk')

const nota = 6


if (nota >= 7) {
    console.log(chalk.green.bold("Parabens você passou"))
} else {
    console.log(chalk.bgRed.black("Você precisa estudar, nota muito baixa"))
}


setTimeout(() => {
    console.clear()
},8000)