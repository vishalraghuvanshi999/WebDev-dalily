// commonly used middleware
//--->express.json
//-->cros--> cross origin resource sharing
const express = require("express");
const app = express();

//const bodyParser = require("bodyParser");


// in express if you want to send json data
// you need to first parse the json data

const middleware = express.json();
app.use(middleware);

// app.use(bodyParser.json());

app.post("/sum",function(req,res){
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

     res.json({
        answer: a+b
    });
});

app.listen(3000);