let fs = require("fs");
let async = require("async");
let opn = require("opn");
let formidable = require("./common");

// let onedrive_auth = require("./onedrive/server");
// let onedriveUploadModule = require("./onedrive");
let s3UploadModule = require("./s3")

module.exports = function (options) {
  return function (req, res, next) {
    let tasks = [];
    function parseBinary(callback) {
      formidable(req, function (err, files) {
        callback(err, files);
      })
    }

    function uploadOnedrive(files, callback) {
      onedriveUploadModule(req, res, files, options, function (err, result) {
        callback(err, files);
      });
    }

    function uploadS3(files, callback) {
      s3UploadModule(req, res, files, options, function (err, result) {
        callback(err, files);
      });
    }

    // tasks.push(parseBinary);

    switch (options.provider) {
      case "onedrive": {
        // tasks.push(uploadOnedrive);
        break;
      }
      case "google-drive":
        break;
      case "aws-s3":{
        console.log("why not working")
        tasks.push(uploadS3);
        break;
      }
      default: {
        console.log("Invalid provider option.");
      }
    }

    async.waterfall(tasks, function (err, result) {
      // TODO 알맞은 반환 메세지 정의 필요
      console.log(err);
      console.log(result);
      res.sendStatus(200);
      next();
    });
  };
};
