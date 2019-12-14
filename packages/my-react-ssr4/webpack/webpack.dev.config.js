// webpack/webpack.dev.config.js
//webpack 配置文件
const path = require('path')

const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);


module.exports = {
    mode: 'development',
    entry: resolvePath('../src/client/app/index.js'),//入口文件
    output: {
        filename: 'index.js',
        path: resolvePath('../dist/static')
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
        ]
    }
}
