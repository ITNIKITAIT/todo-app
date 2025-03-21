'use client';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/hooks/useAuth';
import Container from '@/shared/ui/Container';
import TodoField from '@/widgets/TodoFileld';

export default function Home() {
    const { isLoading, user } = useAuth();

    return (
        <>
            <Navbar />
            <Container>
                <p className="text-3xl mt-5">
                    {isLoading
                        ? 'Loading...'
                        : user
                        ? `Hello ${user.name}!`
                        : 'Login to see todos'}
                </p>
                {user && <TodoField />}
            </Container>
        </>
    );
}
