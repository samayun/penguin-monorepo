/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

app.get('/api/gateway', (req, res) => {
    res.send({ message: 'Welcome to API Gateway' });
});

export default app;
