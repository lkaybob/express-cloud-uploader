var http = require("http");
var express = require("express");
var app = express();
var uploader = require("../lib");
var opn = require('opn');


app.server = http.createServer(app);

app.post('/', uploader({provider: "aws-s3", bucket: "osswtest"}), (req, res)=>{
    res.sendStatus(200);
});

app.server.listen(8080);