import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, TaskController.create);
router.get('/:listId', authMiddleware, TaskController.getAll);
router.put('/:id', authMiddleware, TaskController.update);
router.delete('/:id', authMiddleware, TaskController.delete);

export default router;
