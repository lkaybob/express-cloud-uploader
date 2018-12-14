let formidable = require("formidable");


module.exports = function (req, callback) {
  let form = new formidable.IncomingForm({
    encoding: 'utf-8',
    multiples: true,
    keepExtensions: false
  });

  function onError(err) {
    callback(err, null);
  }

  function onEnd() {
    callback(null, this.openedFiles);
  }

  function onAborted() {
    callback('form.on(aborted)', null);
  }

  form.on('error', onError);
  form.on('end', onEnd);
  form.on('aborted', onAborted);

  form.parse(req, function (err, fields, files) {
    form.off('end', onEnd);
    form.off('error', onError);
    form.off('aborted', onAborted);
  });
};
