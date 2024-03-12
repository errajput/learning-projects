import chalk from "chalk";
const log = console.log;
log(chalk.blue("Hello") + " World" + chalk.red("!"));

import validator from "validator";
//console.log(chalk.blue.underline.inverse("false"));

const res = validator.isEmail("dishacsevira@gmail.monkkl");
console.log(
  res ? chalk.green.inverse(res) : chalk.foregroundColorNames.inverse(res)
);
