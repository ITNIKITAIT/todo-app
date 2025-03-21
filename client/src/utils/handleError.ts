import toast from 'react-hot-toast';

interface ApiError {
    response?: {
        data?: {
            message: string;
            status?: number;
        };
    };
}

export const handleError = (error: unknown) => {
    const err = error as ApiError;
    toast.error(err.response?.data?.message || 'Error');
    throw err;
};
