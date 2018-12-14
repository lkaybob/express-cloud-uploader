let AWS = require('aws-sdk');

module.exports = function (req, res, files, options, callback) {
  var s3 = new AWS.S3();
  var params = {
    Bucket: options.bucket,
    Key: files[0].name,
    ACL: 'public-read',
    Body: require('fs').createReadStream(files[0].path)
  }

  s3.upload(params, function(err,data){
    var result = '';
    if (err){
      result = 'Fail';
      console.log('Something is wrong!');
    }
    console.log('Upload succeeded!');
    return callback(0, null);
  });
}