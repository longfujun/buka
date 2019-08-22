
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/v1', {
       target: 'http://music.taihe.com/',
       changeOrigin: true,
      /*  pathRewrite: {
        "^/x": "/web-interface"
       }, */
    }));

   /*  app.use(proxy('/api', {
        target: 'http://m.buka.cn/',
        changeOrigin: true,
        pathRewrite: {
         "^/api": "/v3/home"
        },
     })); */
};
