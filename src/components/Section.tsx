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
                        <span className="md:text-2xl lg:text-4xl">{title}</span>
                        {more && (
                            <button
                                type="button"
                                className="hidden lg:block text-xs font-medium font-montserrat bg-primary-yellow p-1 px-2 rounded-md text-primary-black"
                            >
                                See more
                            </button>
                        )}
                    </h2>
                )}
            </header>
            {children}
        </section>
    );
};

export default Section;
