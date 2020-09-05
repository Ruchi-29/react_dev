 const path = require("path");
    const webpack = require("webpack");
    const { merge } = require('webpack-merge');
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const modeConfiguration = env => require(`./webpack.${env}`)(env);
    
    module.exports = ({ mode } = { mode: "production" }) => {
        console.log(`mode is: ${mode}`);
    
        return merge(
            {
                mode,
                entry: "./src/index.js",
                devServer: {
                    hot: true,
                    open: true
                },
                output: {
                    publicPath: "/",
                    path: path.resolve(__dirname, "build"),
                    filename: "bundled.js"
                },
                module: {
                    rules: [
                        {
                            test: /\.(js|jsx)$/,
                            exclude: /node_modules/,
                            loader: "babel-loader"
                        },
                        {
                            test: /\.(css|scss)$/,
                            loader: ["css-loader", "sass-loader"]
                        },
                        {
                            test: /\.(svg|jpe?g|png|[ot]tf|eot|woff2?)$/,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: '[name]-[hash:8].[ext]'
                                    }
                                }
                            ]
                        }
                    ]
                },
                plugins: [
                    new HtmlWebpackPlugin({
                        template: './public/index.html',
                        filename: './index.html',
                        favicon: './public/favicon.ico'
                    }),
                    new webpack.HotModuleReplacementPlugin()
                ]
            },
            modeConfiguration(mode)
        );
    };