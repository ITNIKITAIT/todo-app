import { Request, Response } from 'express';
import prisma from '../prisma';

class TodoListController {
    async create(req: Request, res: Response): Promise<any> {
        try {
            const { name } = req.body;
            const userId = req.body.user?.id;

            const todoList = await prisma.todoList.create({
                data: { name, ownerId: userId },
            });

            res.status(201).json(todoList);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

    async getAll(req: Request, res: Response): Promise<any> {
        try {
            const userId = req.body.user?.id;

            const myTodos = await prisma.todoList.findMany({
                where: { ownerId: userId },
                include: {
                    tasks: {
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                },
            });

            const collaboratorTodos = await prisma.todoList.findMany({
                where: {
                    collaborators: {
                        some: { userId },
                    },
                },
                include: {
                    tasks: { orderBy: { createdAt: 'desc' } },
                    collaborators: {
                        where: { userId },
                        select: { role: true },
                    },
                },
            });

            res.json({ myTodos, collaboratorTodos });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

    async update(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const userId = req.body.user?.id;

            const todoList = await prisma.todoList.findUnique({
                where: { id },
            });

            if (!todoList || todoList.ownerId !== userId) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            const updatedList = await prisma.todoList.update({
                where: { id },
                data: { name },
            });

            res.json(updatedList);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

    async delete(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const userId = req.body.user?.id;

            const todoList = await prisma.todoList.findUnique({
                where: { id },
            });

            if (!todoList || todoList.ownerId !== userId) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            await prisma.$transaction([
                prisma.task.deleteMany({ where: { listId: id } }),
                prisma.collaborator.deleteMany({ where: { listId: id } }),
                prisma.todoList.delete({ where: { id } }),
            ]);

            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

export default new TodoListController();
