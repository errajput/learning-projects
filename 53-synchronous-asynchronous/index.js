// 5s
function hello1() {
  for (let i = 0; i < 5; i++) {
    console.log('Hello 1', i);
  }
}
// 6s
function hello2() {
  for (let i = 0; i < 6; i++) {
    console.log('Hello 2', i);
  }
}
// 7s
function hello3() {
  for (let i = 0; i < 7; i++) {
    console.log('Hello 3', i);
  }
}

console.log('Outside Hello Node');

hello1();
hello2();
hello3();

// -

// Other Languages
// - Main Process - main application
// - Thread-1(Child Process) - hello1
// - Thread-2(Child Process) - hello2
// - Thread-3(Child Process) - hello3

// NodeJS / Browser
// - Single Threaded
//      - Less Memory
// - Event Loop(Waiting Area)

// Asynchronous Tasks
// - Network Call(API Call)
// - File System(File read and write)(fs)
// - Database query
// Synchronous Tasks
// - loops
// - function call
// - console.log statement, variable declarations

// Callback
// Promises
// Async Await

console.log('Before');

const data = fetch('https://api.github.com')
  .then((res) => res.json())
  .then((res) => {
    console.log('RES ', res);
  });

console.log('After');
