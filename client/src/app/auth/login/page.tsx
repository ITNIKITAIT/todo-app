'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginFormData, loginSchema } from '../../schemas';
import { api } from '../../api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Button from '@/shared/ui/Button';

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (data: LoginFormData) => {
            const res = await api.post('/auth/login', data);
            return res.data;
        },
        onSuccess: () => {
            router.push('/');
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
        },
        onError: (error) => {
            toast.error(error.message);
            console.error('Login error:', error);
        },
    });

    return (
        <form
            onSubmit={handleSubmit((data) => mutation.mutate(data))}
            className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Login</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    {...register('email')}
                    className="w-full border p-2 rounded mt-1"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                    type="password"
                    {...register('password')}
                    className="w-full border p-2 rounded mt-1"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <Button>Login</Button>

            <p className="text-center mt-4">
                <span>Don't have an account?</span>
                <button
                    onClick={() => router.replace('/auth/register')}
                    type="button"
                    className="text-blue-500 cursor-pointer ml-2">
                    Register
                </button>
            </p>
        </form>
    );
}
