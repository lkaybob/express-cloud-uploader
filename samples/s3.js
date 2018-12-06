module.exports = require('./lib');

var http = require('http');
var util = require('util');
var express = require("express");
var app = express();
//var uploader = require("express-uploader");
var formidable = require("formidable");
var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';

app.get('/', function(req, res){
    var output = `
        <h1> S3 File uploader</h1>
        <form action="/upload" enctype="multipart/form-data" method="post">
            <input type="file" name="upload" multiple="multiple"><br>
            <input type="submit" value="파일 업로드">
        </form>`;
    res.send(output);
});

app.post('/upload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        var s3 = new AWS.S3();
        var params = {
            Bucket: 'osswtest',
            Key: files.upload.name,
            ACL: 'public-read',
            Body: require('fs').createReadStream(files.upload.path)
        }
        console.log("this is path: " + files.upload.path);
        s3.upload(params, function(err,data){
            var result = '';
            console.log(params.Key);
            console.log(params.Body);
            if (err){
                result = 'Fail';
                console.log('Something is wrong!');
            }
            console.log('Upload succeeded!')

        });
    });

    // form.parse(req, function(err, fields, files){
    //     res.writeHead(200, {'content-type': 'text/plain'});
    //     res.write('received upload:\n\n');
    //     res.end(util.inspect({fields: fields, files: files}));
    // });


    
});
   

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(8080, function(){
    console.log('Connected');
});
