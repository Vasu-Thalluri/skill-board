import express from 'express';
const router = express.Router();
import { createUserController } from '../controllers/user.js';

router.post('/register', createUserController);

export default router;