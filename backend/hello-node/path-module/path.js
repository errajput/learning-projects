const path = require("path");

console.log(path.dirname("C:/Users/Pr/hello/nodepath/modulepath.js"));
console.log(path.extname("C:/Users/Pr/hello/nodepath/modulepath.js"));
console.log(path.basename("C:/Users/Pr/hello/nodepath/modulepath.js"));
console.log(path.parse("C:Users/Pr/hello/nodepath/modulepath.js"));

const myPath = path.parse("C:/Users/Pr/hello/nodepath/modulepath.js");
console.log(myPath.name);
