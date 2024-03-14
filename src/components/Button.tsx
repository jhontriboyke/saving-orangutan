import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    children: React.ReactNode;
    className: string;
};

const Button = ({ children, className }: ButtonProps) => {
    const initialClass = twMerge(
        `text-white font-montserrat py-4 px-8 max-w-fit mx-auto rounded-md font-semibold tracking-wide text-sm transition-all duration-200`,
        className
    );
    return (
        <button type="button" className={initialClass}>
            {children}
        </button>
    );
};

export default Button;
