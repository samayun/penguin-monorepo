/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

app.get('/api/analytics', (req, res) => {
    res.send({ message: 'Welcome to analytics' });
});

export default app;
