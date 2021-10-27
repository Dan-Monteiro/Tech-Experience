const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        port: 3000
    },
    resolve:{
        // {...} default extesions
        extensions: ['.js', '.jsx', '.ts', '.tsx', '...']
    },
    plugins: [
        // simplifies working with html files
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'src/fav', 'favicon.ico')
        }),
        // Refresh page on change (dev env.)
        isDev && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                    },
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.ts(|x)$/,
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true
                    }
                  }
                ]
            }
        ]
    }
}