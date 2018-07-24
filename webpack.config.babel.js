import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

const STATIC_URL = process.env.STATIC_URL || 'http://localhost:8001/';

export default {
    entry: [
        '@babel/polyfill',
        './twitter/static/twitter/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'static-root/twitter'),
        filename: 'index.js',
        chunkFilename: '[name].[hash].js',
        publicPath: `${STATIC_URL}twitter/`
    },

    mode: process.env.NODE_ENV || 'development',

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 1024
            }
        }]
    },

    resolve: {
        alias: {
            source: path.resolve(__dirname, 'twitter/static/twitter')
        }
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};
