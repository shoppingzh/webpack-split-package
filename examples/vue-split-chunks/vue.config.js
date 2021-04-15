// module.exports = {
//   publicPath: '/dist',
//   pages: {
//     index: {
//       entry: './src/pages/index/main.js',
//       template: './public/index.html',
//       filename: 'index.html',
//       chunks: ['chunk-vendors', 'chunk-common', 'ui', 'index']
//     }
//   },
//   chainWebpack: config => {
//     config.optimization.splitChunks({
//       chunks: 'all',
//       cacheGroups: {
//         vendors: {
//           name: 'chunk-vendors',
//           test: /[\\/]node_modules[\\/]/,
//           minSize: 10,
//           priority: -10,
//           chunks: 'initial'
//         },
//         ui: {
//           name: 'ui',
//           test: /[\\/]node_modules[\\/]element-ui/,
//           priority: 5,
//           // maxSize: 500 * 1024,
//           chunks: 'initial',
//           reuseExistingChunk: true
//         },
//         common: {
//           name: 'chunk-common',
//           minChunks: 2,
//           priority: -20,
//           chunks: 'initial',
//           reuseExistingChunk: true
//         }
//       }
//     })
//   }
// }
