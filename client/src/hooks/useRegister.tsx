import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface RegisterData {
    email: string;
    password: string;
}

export const useRegister = () => {
    return useMutation({
        mutationFn: async (data: RegisterData) => {
            const response = await axios.post('/api/auth/register', data);
            return response.data;
        },
    });
};
