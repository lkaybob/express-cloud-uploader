let formidable = require("formidable");
let form = new formidable.IncomingForm({
  encoding: 'utf-8',
  multiples: true,
  keepExtensions: false
});

module.exports = function (req, callback) {
  form.parse(req, function (err, fields, files) {
  });
  form.on('error', function (err) {
    callback(err, null);
  });
  form.on('end', function () {
    callback(null, this.openedFiles);
  });
  form.on('aborted', function () {
    callback('form.on(aborted)', null);
  });
};
