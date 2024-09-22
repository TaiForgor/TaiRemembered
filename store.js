const fs = require('fs')
const chalk = require('chalk')

global.owner = [
['584166562349', true], 
]

global.wm = '© Taibot'
global.prefa = '.'
global.session = 'session'
global.vs = '2.0.0'
global.author = 'Tai'
global.lolkey = 'TaiForgor'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Actualización '${__filename}'`))
delete require.cache[file]
require(file)
})
