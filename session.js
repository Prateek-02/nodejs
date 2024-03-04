const express = require('express');
    session = require('express-session');
    app=express();
app.use(
    session({
        secret: "I am human",
        resave: true,
        saveUnimitializes: false,
        cookie:{
            expires:60000
        }
    })
);
app.get('/session',function(req,res,next){
    if(req.session.views){
        req.session.views++;
        res.write('<p> Session expires after 1 min of in activity: '+(req.session.cookie.expires)+'</p>')
            res.end();
    }
    else{
        req.session.views=1;
        res.end(' New session is Started')
    }
})
app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});