import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';
import { generateToken } from '../utils/generateToken';

class UserController {
    async register(req: Request, res: Response): Promise<any> {
        try {
            const { name, email, password } = req.body;

            const existingUser = await prisma.user.findUnique({
                where: { email },
            });
            if (existingUser) {
                return res.status(400).json({
                    message: 'User with this email already exists',
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await prisma.user.create({
                data: { name, email, password: hashedPassword },
            });

            const token = generateToken(user.id);
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
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
                return res.status(400).json({
                    message: 'Incorrect email or password',
                });
            }

            const token = generateToken(user.id);

            res.cookie('jwt', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
            });
            res.json({ user });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
    async check(req: Request, res: Response): Promise<any> {
        const token = req.cookies.jwt;
        if (!token) {
            return res.json(null);
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
            userId: string;
        };

        const user = await prisma.user.findFirst({
            where: {
                id: decoded.userId,
            },
        });

        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }

        res.json({ id: user.id, email: user.email, name: user.name });
    }
    async logout(req: Request, res: Response): Promise<any> {
        try {
            res.clearCookie('jwt', {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
            });

            return res.json({ message: 'Logged out successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
}

export default new UserController();
