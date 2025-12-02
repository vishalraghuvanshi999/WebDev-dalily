// creating a backend server in node.js that return the sum endpoint
//2. write an html file that hit the backend server usig the "fetch" api


// this the backend for html frontend
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname+"./public/02_frontend_sum.html")
})

app.post("/sum",function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);
    const sum = a+b;
    res.json({
        answer: sum
    });
});

app.listen(3000);

// server a folder over http