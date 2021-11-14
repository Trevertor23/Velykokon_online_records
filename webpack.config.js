var path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',


  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),

//     new WebpackPwaManifest({
//     name: 'ONLINE RECORDS SERVICE',
//     short_name: 'RECORDS',
//     crossorigin: 'use-credentials',
//     icons:[
//         {
//             src: path.resolve('icons/app-icon.jpg'),
//             sizes:'600x600'
//         }
//     ],
//     //scopes:'.',
//     display:'standalone',
//     orientation:'portrait-primary',
//     background_color:'#fff',
//     theme_color:'#53E8EC',
//     description:'Online Records Service.',
//     dir:'ltr',
//     lang:'en-US'
// })

  ],
  devServer: {
    static: path.join(__dirname, 'src'),
    compress: true,
    port: 4040
  }
};
