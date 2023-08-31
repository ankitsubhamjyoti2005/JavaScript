// So, here is the challenge. Read all the instructions carefully and try it first before looking into the answers.

//  1: Create a folder named it challenge
//  2: Create a file in it named bio.txt and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder?


var fs = require("fs");

//creating the file
fs.mkdirSync("challenge");
// write info inside the file
fs.writeFileSync('challenge/bio.txt',"my name is ankit\n");
//appand more info
fs.appendFileSync('challenge/bio.txt',"i am learning node js.");
//read the data from the file
var data = fs.readFileSync('challenge/bio.txt',"Utf8");
console.log(data);
//rename the file
fs.renameSync("challenge/bio.txt","challenge/mybio.txt");

//delet file
fs.unlinkSync('challenge/mybio.txt');

//deleting the folder
fs.rmdirSync("challenge");
