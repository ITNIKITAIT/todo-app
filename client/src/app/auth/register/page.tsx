'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { RegisterFormData, registerSchema } from '../../schemas';
import { api } from '../../api';

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (data: RegisterFormData) => {
            const response = await api.post('/auth/register', data);
            return response.data;
        },
        onSuccess: () => {
            router.push('/');
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
        },
        onError: (error) => {
            console.error('Sign up error', error);
        },
    });

    return (
        <form
            onSubmit={handleSubmit((data) => mutation.mutate(data))}
            className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Sign up</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    {...register('name')}
                    className="w-full border p-2 rounded mt-1"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">
                        {errors.name.message}
                    </p>
                )}
            </div>

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

            <div className="mb-4">
                <label className="block text-sm font-medium">
                    Repeat password
                </label>
                <input
                    type="password"
                    {...register('confirmPassword')}
                    className="w-full border p-2 rounded mt-1"
                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
                Register
            </button>
            <p className="text-center mt-4">
                <span>Do you already have an account?</span>
                <button
                    onClick={() => router.replace('/auth/login')}
                    type="button"
                    className="text-blue-500 cursor-pointer ml-2">
                    Login
                </button>
            </p>
        </form>
    );
}
