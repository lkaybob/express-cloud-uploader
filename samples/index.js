var http = require("http");
var express = require("express");
var app = express();
var uploader = require("express-uploader");

app.server = http.createServer(app);


// If target service is S3
app.use(uploader({
  provider: "aws-s3"
}));

// If target service is Google Drive
app.use(uploader({
  provider: "google-drive",
  authKey: "abcd123"
  // Best format for now, but method could change
  // depending on how auth should be done
}));


