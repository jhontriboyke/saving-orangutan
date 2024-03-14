import { twMerge } from 'tailwind-merge';

type SectionProps = {
    title?: string;
    more?: boolean;
    className?: string;
    children?: React.ReactNode;
};

const Section = ({ className, children, title, more = true }: SectionProps) => {
    const cn = twMerge(`container flex flex-col gap-8`, className);
    return (
        <section className={cn}>
            <header>
                {title && (
                    <h2 className="heading lg:flex flex-row items-end justify-between">
                        {title}
                        {more && (
                            <span className="hidden lg:block text-xs font-normal font-montserrat">
                                See more
                            </span>
                        )}
                    </h2>
                )}
            </header>
            {children}
        </section>
    );
};

export default Section;
