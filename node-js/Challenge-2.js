// Challenge #2: Asynchronous CRUD Operations using File System Modules in NodeJS:-


//  1: Create a folder named it challenge
//  2: Create a file in it named bio.txt and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder?

var fs = require("fs");
//creating the file
fs.mkdir("challenge2",(err)=>{
    console.log("folder is created")
});

// write info inside the file
fs.writeFile('challenge2/bio.txt',"my name is ankit\n",(err)=>{
    console.log("file is written")
});

//appand more info
fs.appendFile('challenge2/bio.txt',"i am learning node js.",(err)=>{
    console.log("file is appanded")
});

//read the data from the file
var data = fs.readFile('challenge2/bio.txt',"Utf8",(err,data)=>{
    console.log(data)
});

console.log(data);

//rename the file
fs.rename("challenge2/bio.txt","challenge2/mybio.txt",(err)=>{
    console.log("file is renamed")
});

//delet file
fs.unlink('./challenge2/mybio.txt',(err)=>{
    console.log("unlink the file")
});

//deleting the folder
fs.rmdir("./challenge2",(err)=>{
    console.log("remove the dir")
});
