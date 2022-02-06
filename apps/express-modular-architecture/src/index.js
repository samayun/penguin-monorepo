require('dotenv').config();
const express = require('express');
const app = express();
const { host, port } = require('./config/server');

const connectDB = require('./database/connection');

// SETUP MIDDLEWARES
const setMiddlewares = require('./app/middlewares');
setMiddlewares(app);

// USING ROUTES from Routes Directory
const setRoutes = require('./routes.js');
setRoutes(app);

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
                `${host}:${port}`,
            ),
        );
    } catch (error) {
        console.log(error || 'Server Down');
    }
})();

if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.log = function () {};
}

module.exports = app;
