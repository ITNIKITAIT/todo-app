import { Router } from 'express';
import UserController from '../controllers/UserController';
import { registerValidation } from '../utils/validation';

const router = Router();

router.post('/register', registerValidation, UserController.register);

router.post('/login', UserController.login);

export default router;
