require('dotenv').config();
const express = require('express');

const { host, port } = require('./config/server');

const connectDB = require('./database/connection');

const loadGlobalMiddlewares = require('./app/middlewares');

const loadRestfulRoutes = require('./routes.js');
const { apiGlobalPrefix } = require('./config/api');

const app = express();

app.disable('x-powered-by');

loadGlobalMiddlewares(app);

loadRestfulRoutes(app);

(async function main() {
    try {
        // Connect Database
        await connectDB();
        /*
         * Listen to server
         */
        app.listen(port, () =>
            console.log(
                '\x1b[47m\x1b[46m%s\x1b[0m',
                `🧠 Server running on 👀`,
                '\x1b[1m\x1b[5m',
                `${host}:${port}${apiGlobalPrefix} 🚀`
            )
        );
    } catch (error) {
        console.log(error || 'Server Down');
    }
})();

if (process.env.NODE_ENV === 'production') {
    console.log = function () {};
}

module.exports = app;
