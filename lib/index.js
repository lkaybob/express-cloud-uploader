module.exports = function (options) {
  var optionsCallback = function (req, res, callback) {
    callback(null, options);
  };

  return function (req, res, next) {
    optionsCallback(req, res, function (err, options) {
      // TODO 여기서 옵션을 불러 들여와서 알맞은 서비스에 업로드!
      next();
    });
  };
};
