var buff1 = new Buffer.from("Prateek");
var buff2 = new Buffer.from("Sumit");
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