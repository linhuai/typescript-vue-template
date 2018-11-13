let data = require('./data.js')
const apiRoutes = function (app) {
  app.get('/test', function(req, res) {
    res.json({
      code: 200,
      message: '成功',
      data: data.test
    });
  });
}

module.exports = apiRoutes