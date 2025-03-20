import { Router } from 'express';
import CollaboratorController from '../controllers/CollaboratorController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, CollaboratorController.addCollaborator);
router.delete('/', authMiddleware, CollaboratorController.removeCollaborator);

export default router;
