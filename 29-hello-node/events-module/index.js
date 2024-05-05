const { log } = require("console");
const EventEmitter = require("events");
const event = new EventEmitter();
// event.on("sayMyName", () => {
//   console.log("your name is disha");
// });

// event.on("sayMyName", () => {
//   console.log("your name is disha rajput");
// });

// event.on("sayMyName", () => {
//   console.log("your name is disha rajput 4");
// });
event.on("checkPage", (sc, msg) => {
  console.log("status code is $(sc) and the page is ($msg)");
});

event.emit("checkPage", 200, "ok");
