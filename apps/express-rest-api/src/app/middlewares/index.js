const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const middlewares = [
    cors(),
    express.json({ limit: '2048mb' }),
    express.urlencoded({
        limit: '2048mb',
        extended: false
    }),
    fileUpload(),
    express.static('public'),
    express.static('uploads')
];

module.exports = app => {
    app.disable('x-powered-by');
    app.set('x-powered-by', 'PENGUIN');

    middlewares.forEach(middleware => {
        app.use(middleware);
    });
};
