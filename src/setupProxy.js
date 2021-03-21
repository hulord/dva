// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/v1', {
      //target: 'http://192.168.22.174:8080',
      target:'http://115.159.68.195:8080/',
      changeOrigin: true,
    })
  );
};
