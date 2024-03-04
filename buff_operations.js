// Compare buffer

/*
var buff1 = new Buffer.from("India");
var buff2 = new Buffer.from("Pakistan");
var result = buff1.compare(buff2);
if(result<0){
    console.log(buff1 + " comes before " + buff2);
}
else if(result==0){
    console.log(buff1 + " is same as " + buff2);
}
else{
    console.log(buff1 + " comes after " + buff2);
}
*/

// Copy buffer

/*
var buff1 = new Buffer.from("Prateek");
var buff2 = new Buffer.alloc(10);
buff1.copy(buff2);
console.log("Buffer 2 contents: "+buff2.toString());
*/

// Slice buffer

var buff1 = new Buffer.from("Toota hai Gabba ka ghamand!!..Jeet gayi hai Team India...");
var buff2 = buff1.slice(0,30);
var buff3 = buff1.slice(30,57);
var buff4 = Buffer.concat([buff2,buff3])

console.log("buffer 2 contnet: "+buff2.toString());
console.log("buffer 3 contnet: "+buff3.toString());
console.log("buffer 4 contnet: "+buff4.toString());


//