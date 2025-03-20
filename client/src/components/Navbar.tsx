import { api } from '@/app/api';
import { useAuth } from '@/hooks/useAuth';
import Container from '@/shared/ui/Container';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

const Navbar = () => {
    const { user } = useAuth();

    const queryClient = useQueryClient();

    const handleLogout = async () => {
        await api.get('auth/logout', { withCredentials: true });
        queryClient.invalidateQueries({ queryKey: ['authUser'] });
    };
    return (
        <header className="bg-gray-900 w-full">
            <Container>
                <nav className="text-white px-6 py-4 flex justify-between items-center shadow-lg">
                    <div className="text-xl font-semibold">Todo</div>

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition cursor-pointer">
                            Logout
                        </button>
                    ) : (
                        <Link
                            href="auth/login"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition cursor-pointer">
                            Login
                        </Link>
                    )}
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
