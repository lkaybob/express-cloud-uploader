let http = require('http');
let express = require('express');
let app = express();
let opn = require('opn');
let formidable = require('formidable');
let AWS = require('aws-sdk');

module.exports = function (req, res, files, options, callback) {
  // opn("http://localhost:1111");
  // app.server = http.createServer(app);
  // app.get('/', function(req, res){
    
  // });

  var output = `
        <h1 align="center"> S3 File uploader</h1>
        <form action="/" enctype="multipart/form-data" method="post" align="center">
            <input type="file" name="/upload" multiple="multiple" ><br>
            <input type="submit" value="파일 업로드">
        </form>`;
  res.send(output);
  
  app.post('/', function(req, res){
    var form = new formidable.IncomingForm();
    
    form.parse(req, function(err, fields, files){
      var s3 = new AWS.S3();
      var params = {
            Bucket: 'osswtest',
            Key: files.upload.name,
            ACL: 'public-read',
            Body: require('fs').createReadStream(files.upload.path)
      }

      s3.upload(params, function(err,data){
        var result = '';
        console.log(params.Key);
        console.log(params.Body);
        if (err){
          result = 'Fail';
          console.log('Something is wrong!');
        }
        console.log('Upload succeeded!')
        res.send(`
          <h2 align="center">File upload succeeded!<h2>
          <button align="center" type="button" onclick="window.open('', '_self', ''); window.close();">Discard</button>
        `);
        app.server.close();
      });
    });
    
  });

  // app.post('/', function(req, res){

  // })
  // var form = new formidable.IncomingForm();
  
  // form.parse(req, function(err, fields, files){
  //   var s3 = new AWS.S3();
  //   var params = {
  //         Bucket: 'osswtest',
  //         Key: files.upload.name,
  //         ACL: 'public-read',
  //         Body: require('fs').createReadStream(files.upload.path)
  //   }
  //   s3.upload(params, function(err,data){
  //     var result = '';
  //     console.log(params.Key);
  //     console.log(params.Body);
  //     if (err){
  //       result = 'Fail';
  //       console.log('Something is wrong!');
  //     }
  //     console.log('Upload succeeded!')
  //     res.send(`
  //       <h2 align="center">File upload succeeded!<h2>
  //       <button align="center" type="button" onclick="window.open('', '_self', ''); window.close();">Discard</button>
  //     `);
  //   });
  // });
  // return callback(0, null);







  // app.use("/upload", ((req, res, next) => {
  //   res.send("File upload finished!.");
  //   next();
  // }), () => {
  //   // TODO 어차피 발급이 모두 끝났으니 서버 종료!!
  //   app.server.close();
  // });
  
  

  

  
}
