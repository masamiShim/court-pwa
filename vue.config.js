//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    publicPath: process.env.MODE_ENV == 'production' ? '/court-pwa' : '/',
    outputDir: 'docs',
/*    css: {
        loaderOptions: {
            sass: {
                data: '@import"@/assets/scss/common.scss";'
            },
        },
    },
    */
//    configureWebpack: {
//        plugins: [new BundleAnalyzerPlugin()]
//    }
}
