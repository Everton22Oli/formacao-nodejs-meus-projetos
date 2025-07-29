import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.green('Olá mundo!!'));
console.log(logSymbols.success, chalk.green.bold("Servidor iniciado com sucesso!!"))
console.log(logSymbols.error, chalk.red.italic("servidor com problema"))
