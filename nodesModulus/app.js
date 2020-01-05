const chalk = require('chalk');

console.log(chalk.bgBlueBright('Success!'))
console.log(chalk.bgBlueBright('Success!', chalk.bgGray(' '), chalk.underline.bgRedBright('Stop!')))


