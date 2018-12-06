var http = require("http");
var express = require("express");
var app = express();
var uploader = require("../lib");

app.server = http.createServer(app);

app.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
  res.sendStatus(200);
});

app.server.listen(8080);
