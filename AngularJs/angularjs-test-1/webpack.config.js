const path = require('path');

const config = {
    entry : './src/modules/app.js', // File đầu vào
    output : { // File đầu ra
        filename : 'bundle.js', // Tên file đầu ra
        path : path.resolve(__dirname, '/src/dist') // Nơi chưa file đầu ra
    }
}

module.exports = config;