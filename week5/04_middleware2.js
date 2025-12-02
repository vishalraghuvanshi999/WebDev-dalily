const express = require("express");
const app = express();// inzitial

let requestcount =0;

function requestincreser(req,res,next){
    requestcount++;
    if(req.body.cookie == "google"){
        next();
    }else{
        res.json({
        msg: "i ended the request early"
    })
    }
//     req.name = "vishal";
//     console.log("total request count",requestcount);
   
    // next();
    
}

function realsumhandler(req,res){
     const a = parseInt(req.query.a);//"1"-->parseINT
    const b = parseInt(req.query.b);//"2"
    console.log(req.name);

    res.json({
        answer: a+b
    })
}

app.use(requestincreser);
app.get("/sum",realsumhandler);


app.listen(3000);