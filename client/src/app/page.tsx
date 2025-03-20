'use client';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/hooks/useAuth';
import Container from '@/shared/ui/Container';

export default function Home() {
    const { isLoading, user } = useAuth();
    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <Navbar />
            <Container>
                <p className="text-3xl mt-5">
                    {user ? `Hello ${user.name}!` : 'Login to see todos'}
                </p>
            </Container>
        </>
    );
}
