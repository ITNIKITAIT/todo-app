import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={cn('mx-auto w-full max-w-screen-xl px-20', className)}>
            {children}
        </div>
    );
};

export default Container;
