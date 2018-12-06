let token = require("./onedrive-token").token;
let axios = require("axios");

module.exports = function (req, res, files, options, callback) {
  let headers = {
    "Authorization": `Bearer ${token.access_token}`,
    "Content-Type": "text/plain"
  };
  axios.defaults.baseURL = "https://graph.microsoft.com";
  axios.put(`v1.0/me/drive/root:${options.path}/${files[0].name}:/content`,
    require('fs').createReadStream(files[0].path), {headers: headers})
    .then(response => {
      console.log(response.data);
      return callback(0, null);
    }).catch(error => {
    console.log(error);
    console.log(error.response);
  });
};
