const path = '/v1/tests';
const router = require('express').Router();

module.exports = () => {
    router.get('/list', (req, res, next) => {
        /* #swagger.tags = ['.template'] */
        res.status(200).json({
            message: 'Get all tests'
        });
    });

    return {
        path,
        router
    };
};
