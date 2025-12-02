// creting own middleware 

const express = require("express");
const app = express();// inzitial

let requestcount =0;
function requestincreser(req,res,next){
    requestcount++;
    console.log("total request count",requestcount);
    req.requestcount = requestcount;
}

app.get("/sum",(req,res)=>{
    // requestcount++;
    // console.log("total request count",requestcount);

    requestincreser(); // very close to middleware

    const a = parseInt(req.query.a);//"1"-->parseINT
    const b = parsei(req.query.b);//"2"

    res.json({
        answer: a+b
    })
})

app.get("/multiply",(req,res)=>{
    requestincreser();

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a*b
    })
})

app.listen(3000);