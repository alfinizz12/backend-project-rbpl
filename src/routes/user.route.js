import express from 'express';
import { getUser } from '../controllers/user.controller.js';
import {login} from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getUser);
router.post('/login', login);

export default router;