const fs = require('fs');

console.log("Going to create a directory /tmp/test");
fs.mkdir("C:\desktop", (err) => {
    if (err) {
        console.log("Failed to make a directory:", err);
    } else {
        console.log("Directory created successfully");
    }
    // remove directory
    fs.rmdir("C:\desktop",(err) => {
        if(err){
            console.log("failed to remove the directory");
        }
        else{
            console.lof("Directory removed successfully");
        }
    });    
});

