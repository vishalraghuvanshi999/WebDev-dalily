// creating http server

const express = require("express");
const app = express();// inzitial

// app.get("/sum",(req,res)=>{
//     const a = parseInt(req.query.a);//"1"-->parseINT
//     const b = parsei(req.query.b);//"2"

//     res.json({
//         answer: a+b
//     })
// })

app.get("/sum/:firstarg/:secondarg",(req,res)=>{
    const a = parseInt(req.params.firstarg);
    const b = parseInt(req.params.secondarg);

    res.json({
        answer: a+b
    })
})

app.get("/multiply",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a*b
    })
})

app.listen(3000);