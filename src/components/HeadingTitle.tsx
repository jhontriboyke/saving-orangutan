type HeadingTitle = {
    title: string;
};

const HeadingTitle = ({ title }: HeadingTitle) => {
    return (
        <header>
            <div className="pt-16 pb-8 text-center">
                <h1 className="text-3xl font-semibold text-primary-black font-playfair">
                    {title}
                </h1>
            </div>
        </header>
    );
};

export default HeadingTitle;
