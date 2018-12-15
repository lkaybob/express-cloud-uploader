require('dotenv').config();
let axios = require("axios");
let onedrive_auth;
let keyPath = __dirname + "/onedrive-token.json";

function openAuthServer() {
  if (process.env.OAUTH_APP_ID !== undefined) {
    if (onedrive_auth === undefined) {
      onedrive_auth = require("./server");
    }
    if (onedrive_auth.server.address() === null) {
      onedrive_auth.server.listen(1111);
    }
    console.log(`OneDrive OAuth2 Initialization is Needed`);
    console.log(`Please login to OneDrive at http://localhost:${onedrive_auth.server.address().port}/auth/signin`);
  }
}
function initializeToken() {
  let fs = require("fs");
  let token;

  if (fs.existsSync(keyPath)) {
     token = JSON.parse(fs.readFileSync(keyPath, "utf-8")).token;
    let now = new Date();
    let expires_at = new Date(token.expires_at);

    if (token === null || now > expires_at) {
      openAuthServer();
      return false;
    } else {
      return token;
    }
  } else {
    openAuthServer();
    return false;
  }
}

module.exports = function (req, res, files, options, callback) {
  let token = initializeToken();
  if (token) {
    let headers = {
      "Authorization": `Bearer ${token.access_token}`,
      "Content-Type": "text/plain"
    };
    axios.defaults.baseURL = "https://graph.microsoft.com";
    let url = `v1.0/me/drive/root:${options.path}/${files[0].name}:/content`;
    axios.put(url,
      require('fs').createReadStream(files[0].path), {headers: headers})
      .then(response => {
        return callback(0, response);
      }).catch(error => {
      console.log(error);
      console.log(error.response);
    });
  } else {
    openAuthServer();
    callback("Not initialized", null);
  }
};

initializeToken();
