import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';

class UserController {
    async register(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const existingUser = await prisma.user.findUnique({
                where: { email },
            });
            if (existingUser) {
                res.status(400).json({
                    message: 'User with this email already exists',
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await prisma.user.create({
                data: { name, email, password: hashedPassword },
            });

            res.status(201).json({ message: 'User was created', user });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    async login(req: Request, res: Response): Promise<any> {
        try {
            const { email, password } = req.body;
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                return res.status(400).json({
                    message: 'Incorrect email or password',
                });
            }

            const isPasswordValid = await bcrypt.compare(
                password,
                user.password
            );
            if (!isPasswordValid) {
                res.status(400).json({
                    message: 'Incorrect email or password',
                });
            }

            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET as string,
                {
                    expiresIn: '7d',
                }
            );

            res.json({ token, user });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
}

export default new UserController();
