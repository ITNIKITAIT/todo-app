import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface BtnProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({ children, className, onClick }: BtnProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                'w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer',
                className
            )}>
            {children}
        </button>
    );
};

export default Button;
