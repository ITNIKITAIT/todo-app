import { Router } from 'express';
import TodoListController from '../controllers/TodoListController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, TodoListController.create);
router.get('/', authMiddleware, TodoListController.getAll);
router.put('/:id', authMiddleware, TodoListController.update);
router.delete('/:id', authMiddleware, TodoListController.delete);

export default router;
