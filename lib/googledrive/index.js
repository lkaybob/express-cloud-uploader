const authClient = require("./auth-client");
const {google} = require("googleapis");
const fs = require("fs");

function isAuthenticated() {
  return authClient.oAuth2Client !== null;
}

async function uploadFile(oAuth2Client, files) {
  const drive = google.drive({
    version: "v3",
    auth: oAuth2Client
  });
  const res = await drive.files.create({
    resource: {
      "name": files[0].name
    },
    media: {
      body: fs.createReadStream(files[0].path)
    }
  });

  return res.data;
}

function authenticateGoogleDrive(callback) {
  const scopes = ['https://www.googleapis.com/auth/drive.file'];
  authClient.authenticate(scopes).then(oAuth2Client => {
    callback(oAuth2Client);
  });
}

module.exports = function (req, res, files, options, callback) {
  // TODO authClient.oAuth2Client 가 null 인지 확인!
  if (!isAuthenticated()) {
    authenticateGoogleDrive(async function (oAuth2Client) {
      uploadFile(oAuth2Client, files).then(() => {
        callback(0, null);
      })
        .catch(error => {
          console.log(error);
        });
    });
  } else {
    uploadFile(authClient.oAuth2Client, files).then(() => {
      callback(0, null);
    });
  }
};

authenticateGoogleDrive(() => {

});
