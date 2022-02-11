// require("dotenv").config();

const { JWT } = require('jwt-auth-helper');
const authenticate = require('../../../app/middlewares/isAuth');
const authService = require('../services/authService');

const { registerValidator, loginValidator } = require('../validator/auth.validator');

const jwt = new JWT(process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY');

const path = '/v1/auth';
const router = require('express').Router();

module.exports = () => {
    router.post('/login', loginValidator, async (req, res, next) => {
        /* #swagger.tags = ['Authentication']
        #swagger.description = 'Sign in a specific user' */
        try {
            const { email, password } = req.body;
            const user = await authService.login({
                email,
                password
            });
            // generate access token
            const accessToken = await jwt.generateJWTToken({ ...user });

            res.json({
                status: 'success',
                message: `${user.name} logged in successfully`,
                data: user,
                accessToken
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    });

    router.post('/register', registerValidator, async (req, res, next) => {
        /* 	#swagger.tags = ['Authentication']
        #swagger.description = 'Endpoint to sign up a specific user' */
        try {
            const user = await authService.register(req.body);

            const accessToken = await jwt.generateJWTToken({ ...user });

            res.json({
                status: 'success',
                message: `${user.name} register successfully`,
                data: accessToken
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/profile', authenticate, async (req, res, next) => {
        try {
            res.json({
                status: 'success',
                message: `Valid profile`,
                data: await authService.profile(req.user.email)
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/users', authenticate, async (req, res, next) => {
        try {
            res.json({
                status: 'success',
                message: `Valid profile`,
                data: await authService.getUsers()
            });
        } catch (error) {
            next(error);
        }
    });
    return {
        path,
        router
    };
};
