const path = require('path');

module.exports = {
    module: {
        loaders: [{
            test: /.css$/,
            loaders: ['style', 'css']
        }, {
            test: /.jpe?g$/,
            loaders: ['file', 'image-webpack']
        }]
    }
};
