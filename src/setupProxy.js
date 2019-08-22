const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/ranking', {
       target: 'http://m.buka.cn/',
       changeOrigin: true,
    }));

    app.use(proxy('/api', {
        target: 'http://m.buka.cn/',
        changeOrigin: true,
     }));

     app.use(proxy('/category', {
      target: 'http://m.buka.cn/',
      changeOrigin: true,
   }));

};
