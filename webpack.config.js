const webpack = require("webpack");

module.exports = [{
    mode: "development",
    entry: {
        bundle: ["./src/js/index.js"],
        styles: ["./src/sass/styles.scss"]
    },
    output: {
        filename: "[name].js",
        path: `${__dirname}/dist/js`
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }]
        }, {
            // CSS Modules
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        url: true,
                        sourceMap: true,
                        minimize: true,
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                },
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader'
                }
            ]
        }, {
            // バイナリファイル
            test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({options: {}}),
    ],
    devtool: "source-map"
}];
