'use client';
import { api } from '@/app/api';
import { useQuery } from '@tanstack/react-query';

interface User {
    id: string;
    name: string;
    email: string;
}

const fetchUser = async () => {
    try {
        const response = await api.get<User | null>('/auth/check', {
            withCredentials: true,
        });
        return response.data ?? null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const useAuth = () => {
    const { data: user, isLoading } = useQuery({
        queryKey: ['authUser'],
        queryFn: fetchUser,
        staleTime: 5 * 60 * 1000,
    });

    return { user, isLoading };
};
