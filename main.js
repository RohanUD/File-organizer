// let input=process.argv.slice(2);
// //getting input and storing it into array

// console.log(input);
let bc = require("process");
var output = bc.argv;
var Arr = output.slice(2);
console.log(Arr); //input array

// array would contain atmost 2elements 

let instruction = Arr[0];
//mainly three types of instruction
// 1) insert or mount
// 2) organize
// 3)help

switch (instruction) {
  case "insert":
      toInsert(Arr[1]);
    break;
  case "organize":
      organize(Arr[1]);
    break;
  case "help":
      help()
    break;
  default:
    console.log("say a  proper command");
}

function toInsert(command) {
    console.log('working fine');
}
function organize(command) {
    console.log('working fine');
}

function help() {
    console.log(`
            Your avalaible commands are:
            insert 'path'
            organize 'path'
            
    `);
}
