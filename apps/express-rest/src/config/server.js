require('dotenv').config();
module.exports = {
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 5000
};
