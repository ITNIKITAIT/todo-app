import { Router } from 'express';
import UserController from '../controllers/UserController';
import { registerValidation } from '../utils/validation';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerValidation, UserController.register);
router.post('/login', UserController.login);
router.get('/check', UserController.check);
router.get('/logout', authMiddleware, UserController.logout);

export default router;
