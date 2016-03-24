var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var prodEnvironemnt = 'production';
var devEnvironment = 'development';

var environment = process.env.ENVIRONMENT || devEnvironment;

var pluginList = [
    new ExtractTextPlugin('[name].css')
];

// Modify build steps based on target
switch ( environment ) {
    case prodEnvironemnt:
        console.log('Building for production.');
        pluginList.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
        break;

    case devEnvironment:
        break;

    default:
        console.log('Unknown environment \'' + environment + '\', defaulting to development.');
        console.log('Please set the ENVIRONMENT variable to a valid target [\'development\', \'production\'].');
        break;
}

// Configure webpack
module.exports = {
    entry: {
        app: ['./development/main.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'development')
                ]
            },
            {
                test: /\.sass?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
                include: [
                    path.resolve(__dirname, 'development')
                ]
            }
        ]
    },
    plugins: pluginList
};
