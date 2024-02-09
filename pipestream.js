// piping

var fs = require("fs");
// create a readable stream
var reader = fs.createReadStream('test.txt');
//create a writable stream
var writer = fs.createWriteStream('test1.txt');
writer.on('pipe',()=>{
    console.log('Something is piping into the writer');
});
reader.pipe(writer);


// unpipe

var fs = require("fs");
// create a readable stream
var reader = fs.createReadStream('test.txt');
//create a writable stream
var writer = fs.createWriteStream('test1.txt');
writer.on('unpipe',()=>{
    console.log('Unpiping occured');
});
reader.unpipe(writer);