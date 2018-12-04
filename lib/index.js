let fs = require("fs");
let onedriveWorker = require("./onedrive/server");
let access_token = {};
const OAUTH_PORT = 1111;

module.exports = function (options) {
  var optionsCallback = function (req, res, callback) {
    callback(null, options);
  };

  return function (req, res, next) {
    optionsCallback(req, res, function (err, options) {
      // TODO 여기서 옵션을 불러 들여와서 알맞은 서비스에 업로드!
      switch (options.provider) {
        case "onedrive": {
          let path = __dirname.concat("/onedrive-token.json");
          fs.exists(path, (exists => {
            if (exists) {
              access_token = JSON.parse(fs.readFileSync(path, 'utf-8'));
              console.log("OneDrive access token credential found");
            } else {
              let address = onedriveWorker.server.address();
              // 없으면 받아오기
              onedriveWorker.server.listen(OAUTH_PORT);
              console.log(`OneDrive access token credential not found\nPlease visit http://${address.address}:${address.port}/auth/signin`);
            }
          }));

          break;
        }
        case "google-drive":
          break;
        case "aws-s3":
          break;
        default:
        {
          console.log("Invalid provider option.");
        }
      }
      next();
    });
  };
};
