const libs = {
  element: {
    test: /[\\/]node_modules[\\/]element-ui[\\/]/,
    pages: ['index']
  },
  ant: {
    test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
    pages: ['admin']
  }
}

const pages = {
  index: {
    entry: 'src/pages/index/main.js',
    template: 'public/index.html',
    filename: 'index.html'
  },
  admin: {
    entry: 'src/pages/admin/main.js',
    template: 'public/index.html',
    filename: 'admin.html'
  }
}

// 第三方库缓存
const libGroups = Object.keys(libs).reduce((groups, libName) => {
  const name = `lib-${libName}`
  groups[name] = {
    name,
    test: libs[libName].test,
    priority: 5
  }
  return groups
}, {})

// 更改单页chunks
Object.keys(pages).forEach(pageName => {
  const page = pages[pageName]
  const libChunks = Object.keys(libs).filter(libName => libs[libName].pages.indexOf(pageName) >= 0).map(o => `lib-${o}`)
  page.chunks = ['chunk-vendors', 'chunk-common', ...libChunks, pageName]
})


module.exports = {
  publicPath: '/dist',
  productionSourceMap: false,
  pages,
  chainWebpack: config => {
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          minSize: 10,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          minSize: 0,
          chunks: 'initial',
          reuseExistingChunk: true
        },
        ...libGroups
      }
    })
  }
}
