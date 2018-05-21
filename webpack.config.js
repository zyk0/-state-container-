var path = require('path');
 
module.exports = {
   entry: "./app/app.js", // входная точка - исходный файл
   output:{
       path: path.resolve(__dirname, './public'),     //  /public
       publicPath: '/public/',
       filename: "bundle.js"       // bundle
   },
   module:{
       rules:[   //загрузчик для js
           {
               test: /\.js?$/, // файлы js! jsx тут не будет
               exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
               loader: "babel-loader",   // определяем загрузчик
               options:{
                   presets:["env", "react"]    // используемые плагины
               }
           },
		   {
                test: /\.css$/,
                loader: 'css-loader'
            }
       ]
   }
}