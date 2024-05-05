const os = require("os");
console.log(os.arch()); // archecture
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freeMenory = os.freemem();
//console.log(freeMenory);
console.log(`${freeMenory}`);

const totalMenory = os.totalmem();
//console.log(freeMenory);
console.log(`${totalMenory}`);
