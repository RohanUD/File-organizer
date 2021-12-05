// let input=process.argv.slice(2);
// //getting input and storing it into array

// console.log(input);
let bc = require("process");
let fs = require("fs");
let direction = require("path");
const { dir } = require("console");
var output = bc.argv;
var Arr = output.slice(2);
console.log(Arr); //input array

let typesOfFile={
  media : ["mp4",'mkv'],
  Pictures:['jpg','png','heic'],
  documents:['pdf','doc','txt','ps','odf','odp','odg','xlsx','docx'],
  app:['exe','dmg','pkg','deb']
}

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
    help();
    break;
  default:
    console.log("say a  proper command");
}

function toInsert(command) {}
function organize(command) {
  // first to make folder in the given path
  //to identify all the files present in the folder
  //to make mutliple folder for the given files

  if (command === undefined) {
    console.log("Enter the path");
    return;
  } else {
    var pathValidator = fs.existsSync(command);
    if (pathValidator === true) {
      var desPth = direction.join(command, "organized-files");
      if (fs.existsSync(desPth) == false) {
        fs.mkdirSync(desPth);
      }
    } else {
      console.log("Enter the correct path");
    }
  }

  toOrganize(command, desPth);
}

function toOrganize(dirPath, desPath) {
  var list = fs.readdirSync(dirPath);
  // console.log(list);
  for (let i = 0; i < list.length; i++) {
    let fileAdress=direction.join(dirPath,list[i]);
    let isItemsAreFileOrNot=fs.lstatSync(fileAdress).isFile();
    if(isItemsAreFileOrNot==true){
      let category=getcategory(list[i]);
    }



  }
}

function help() {
  console.log(`
            Your avalaible commands are:
            insert 'path'
            organize 'path'
            help
    `);
}

function getcategory(filenames) {
  let ext=direction.extname(filenames);
  ext=ext.slice(1);
  for(let key in typesOfFile){
      let currentType=typesOfFile[key]
  }
}
