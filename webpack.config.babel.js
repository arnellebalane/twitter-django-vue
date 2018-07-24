import path from 'path';

export default {
    entry: './twitter/static/twitter/index.js',

    output: {
        path: path.resolve(__dirname, 'static-root/twitter'),
        filename: 'index.js',
        chunkFilename: '[name].[hash].js',
        publicPath: 'http://localhost:8003/'
    },

    mode: process.env.NODE_ENV || 'development'
};
