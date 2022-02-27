const TestModel = require('../model/Test.model');

const path = '/v1/tests';
const router = require('express').Router();

module.exports = () => {
    router.get('/', async (req, res, next) => {
        /* #swagger.tags = ['.template'] */
        res.status(200).json({
            success: true,
            message: 'Get all tests',
            data: await TestModel.find()
        });
    });

    return {
        path,
        router
    };
};
