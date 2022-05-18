const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

//console.log(args)

const nome = args['nome']
const profissao = args['profissao']

console.log(`Ola ${nome}, prazer em te conhecer. UAU amo quem trabalha como ${profissao}`)
