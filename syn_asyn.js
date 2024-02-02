/*
var fs =  require("fs");
 // Asynchronus read    (if 1st operation isntaking time to execute then the next operation will execute first)
 fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronus read: "+data.toString());
});

// Synchronus read     (1st operation will exeute then 2nd will execute)
var data = fs.readFileSync('input.txt');
console.log("Synchronus read: "+data.toString());
console.log("Program ended");
*/


/* Open in read mode

var fs = require("fs");

// Asynchronus opening file 
console.log("Going to opoen file!");
fs.open('input.txt', 'r+', function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("File open successfully");
});
*/


/* Check the status of the file

var fs = require("fs");

console.log("Going to opoen file!");
fs.stat('input.txt', 'r+', function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully");

    // check file type
    console.log("isfile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});
*/


var fs =require("fs");
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Hello World',function(err){
    if(err){
        return console.error(err);
    }

    console.log("Data written successfully");
    console.log("Let's read newly written data");

    fs.readFile('input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("Asynchronus read: "+data.toString());
    })
});

