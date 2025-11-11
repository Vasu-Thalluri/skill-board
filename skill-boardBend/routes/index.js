import express from 'express';
const app = express();
import user from '../routes/user.js';

app.use(express.json());
app.use('/user', user);

export default app;