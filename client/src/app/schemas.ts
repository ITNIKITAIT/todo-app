import { z } from 'zod';

export const registerSchema = z
    .object({
        name: z.string().min(2, 'Name must be more than 6 chars'),
        email: z.string().email('Incorrect email'),
        password: z.string().min(6, 'Password must be more than 6 chars'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

export const loginSchema = z.object({
    email: z.string().email('Incorrect email'),
    password: z.string(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
