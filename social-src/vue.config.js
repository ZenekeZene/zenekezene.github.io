const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../social"),
    publicPath: '/social',
    chainWebpack: config => {
        config.module.rule('md')
        .test(/\.md/)
        .use('html-loader')
            .loader('html-loader')
            .end()
        .use('markdown-loader')
            .loader('markdown-loader')
            .end()
    }
}