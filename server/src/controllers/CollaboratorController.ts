import { Request, Response } from 'express';
import prisma from '../prisma';

class CollaboratorController {
    async getCollaborators(req: Request, res: Response): Promise<any> {
        const { listId } = req.params;

        if (!listId) {
            return res.status(400).json({ message: 'Missing listId' });
        }

        const collaborators = await prisma.collaborator.findMany({
            where: { listId },
            include: {
                user: {
                    select: { id: true, name: true, email: true },
                },
            },
        });

        res.json(collaborators);
    }
    async addCollaborator(req: Request, res: Response): Promise<any> {
        const { email, listId, role } = req.body;
        const ownerId = req.body.user?.id;

        if (!email || !listId || !role) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.id === ownerId) {
            return res
                .status(400)
                .json({ message: 'You cannot add yourself as a collaborator' });
        }

        const existingCollaborator = await prisma.collaborator.findFirst({
            where: { userId: user.id, listId },
        });

        if (existingCollaborator) {
            return res.status(400).json({
                message: 'User is already a collaborator in this list',
            });
        }

        const collaborator = await prisma.collaborator.create({
            data: { userId: user.id, listId, role },
        });

        res.json(collaborator);
    }
    async removeCollaborator(req: Request, res: Response): Promise<any> {
        const { userId, listId } = req.body;

        if (!userId || !listId) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const collaborator = await prisma.collaborator.findFirst({
            where: { userId, listId },
        });

        if (!collaborator) {
            return res.status(404).json({ message: 'Collaborator not found' });
        }

        await prisma.collaborator.delete({
            where: { id: collaborator.id },
        });

        res.json({ message: 'Collaborator removed' });
    }
}

export default new CollaboratorController();
