import { Router } from 'express';
import authRouter from './authRouter';
import todoRouter from './todoRouter';
import taskRouter from './taskRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/todos', todoRouter);
router.use('/tasks', taskRouter);

export default router;
