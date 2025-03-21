import { Request, Response } from 'express';
import prisma from '../prisma';
import { UserRole } from '@prisma/client';

class TaskController {
    async create(req: Request, res: Response): Promise<any> {
        try {
            const { title, description, listId, user } = req.body;
            const userId = user?.id;

            const list = await prisma.todoList.findUnique({
                where: { id: listId },
                include: {
                    collaborators: {
                        where: { userId },
                        select: { role: true },
                    },
                },
            });

            if (!list) {
                return res.status(404).json({ message: 'List not found' });
            }

            const isOwner = list.ownerId === userId;
            const isAdmin = list.collaborators.some(
                (collab) => collab.role === UserRole.ADMIN
            );

            if (!isOwner && !isAdmin) {
                return res.status(403).json({ message: 'Access denied' });
            }

            const task = await prisma.task.create({
                data: { title, description, listId },
            });

            res.json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }

    async getAll(req: Request, res: Response): Promise<any> {
        try {
            const { listId } = req.params;
            const userId = req.body.user?.id;

            const list = await prisma.todoList.findUnique({
                where: { id: listId },
            });
            if (!list || list.ownerId !== userId) {
                return res.status(403).json({ message: 'Access denied' });
            }

            const tasks = await prisma.task.findMany({
                where: { listId },
                orderBy: {
                    createdAt: 'desc',
                },
            });

            res.json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }
    }

    async updateStatus(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const { status, user } = req.body;
            const userId = user?.id;

            const task = await prisma.task.findUnique({ where: { id } });
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }

            const list = await prisma.todoList.findUnique({
                where: { id: task.listId },
                include: {
                    collaborators: {
                        where: { userId },
                        select: { role: true },
                    },
                },
            });
            if (!list) {
                return res.status(404).json({ message: 'List not found' });
            }

            const updatedTask = await prisma.task.update({
                where: { id },
                data: { status },
            });

            res.json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }
    }

    async delete(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const userId = req.body.user?.id;

            const task = await prisma.task.findUnique({ where: { id } });
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }

            const list = await prisma.todoList.findUnique({
                where: { id: task.listId },
                include: {
                    collaborators: {
                        where: { userId },
                        select: { role: true },
                    },
                },
            });

            if (!list) {
                return res.status(404).json({ message: 'List not found' });
            }

            const isOwner = list.ownerId === userId;
            const isAdmin = list.collaborators.some(
                (collab) => collab.role === UserRole.ADMIN
            );

            if (!isOwner && !isAdmin) {
                return res.status(403).json({ message: 'Access denied' });
            }

            await prisma.task.delete({ where: { id } });
            res.json({ message: 'Task deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}

export default new TaskController();
