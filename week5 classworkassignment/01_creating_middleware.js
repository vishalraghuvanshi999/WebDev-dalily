// middleware function that log each incoming request http method,url,timestamp to console
// create middleware that count total number sent to aserver .also create an endpoint that expose it

const express = require("express");
const app = express();
// logs the method timestamp and url

function middleware(req,res,next){
    console.log("methode is"+ req.method);
    console.log("route is"+ req.url);
    console.log("host is"+ req.hostname);
    console.log(new Date());

    next();
}

app.use(middleware);

app.get("/sum",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

     res.json({
        answer: a+b
    });
});

app.listen(3000);