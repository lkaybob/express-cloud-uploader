let async = require("async");
let formidable = require("./common");
let onedriveUploadModule = require("./onedrive");
let googleDriveUploadModule = require("./googledrive");
let s3UploadModule = require("./s3");

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

    function uploadGoogleDrive(files, callback) {
      googleDriveUploadModule(req, res, files, options, function (err, result) {
        callback(err, files);
      });
    }

    tasks.push(parseBinary);

    switch (options.provider) {
      case "onedrive": {
        tasks.push(uploadOnedrive);
        break;
      }
      case "google-drive":
        tasks.push(uploadGoogleDrive);
        break;
      case "aws-s3":{
        tasks.push(uploadS3);
        break;
      }
      default: {
        console.log("Invalid provider option.");
      }
    }

    async.waterfall(tasks, function (err, result) {
      if (err) {
        res.sendStatus(500);
        next('route');
      } else {
        next();
      }
    });
  };
};
