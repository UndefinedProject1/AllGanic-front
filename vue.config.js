const path = require('path');
module.exports = {
  publicPath: process.env.BASE_URL,
  assetsDir: process.env.BASE_URL, 
  devServer: {
   contentBase: path.join(__dirname, ''), // 설정하면 url(/src/assets") 경로 사용 가능 

   proxy : {
     '/REST/api' : {
       target : 'http://localhost:8080',
       changeOrigin : true,
       logLevel : 'debug',
     }
   },
   port : 9090
  }
};