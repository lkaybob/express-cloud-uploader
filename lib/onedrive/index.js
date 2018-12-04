let token = require("./onedrive-token").token;
let axios = require("axios");

module.exports = function (options) {
  return (req, res, files, next) => {
    let headers = {"Authorization": `Bearer ${token.access_token}`};
    // TODO Path 도 option 으로 받아야할 것 같다.
    let path = "";
    axios.defaults.baseURL = "https://graph.microsoft.com/v1.0/me/drive/root";
    axios.put(`${path}/${files[0].name}`,
      require('fs').createReadStream(files[0].path), headers)
      .then(response => {
      console.log(response.data);
    });
    next();
  };
};
