const fs = require("fs");

//fs.mkdirSync("disha");           //for creating folder
//fs.writeFileSync("bio.txt", "I am Disha Rajput.");

//fs.appendFileSync("bio.txt", "I am from Bijnor");       //add dta at the end of line
// const data = fs.readFileSync("bio.txt", "utf-8");
// console.log(data);

//fs.renameSync("bio.txt", "disha/myBio.txt");        // for rename

//fs.unlinkSync("disha/myBio.txt");   //for delete file

fs.rmdirSync("disha"); // for delete folder
