var http = require("http");
var express = require("express");
var app = express();
var uploader = require("../lib");
var opn = require('opn');


opn("http://localhost:8080");
app.server = http.createServer(app);
// opn('http://localhost:8080');

// app.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
//   res.sendStatus(200);
// });

// app.get("/", uploader({provider: "aws-s3"}), (req, res)=>{
//     res.sendStatus(200);
// });


app.get('/', uploader({provider: "aws-s3"}), (req, res)=> {
    res.sendStatus(200);
});



app.server.listen(8080);
