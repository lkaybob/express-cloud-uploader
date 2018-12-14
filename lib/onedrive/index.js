let axios = require("axios");

module.exports = function (req, res, files, options, callback) {
  let tokenInfo = JSON.parse(require("fs").readFileSync(__dirname+"/onedrive-token.json", "utf-8"));
  if (tokenInfo !== null) {
    let token = tokenInfo.token;
    let headers = {
      "Authorization": `Bearer ${token.access_token}`,
      "Content-Type": "text/plain"
    };
    axios.defaults.baseURL = "https://graph.microsoft.com";
    let url = `v1.0/me/drive/root:${options.path}/${files[0].name}:/content`;
    axios.put(url,
      require('fs').createReadStream(files[0].path), {headers: headers})
      .then(response => {
        console.log(response.data);
        return callback(0, null);
      }).catch(error => {
      console.log(error);
      console.log(error.response);
    });
  }
};
