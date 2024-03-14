const Footer = () => {
    return (
        <footer className="bg-primary-green p-5 md:pt-8 lg:pt-12 pb-4 mt-24">
            <div className="lg:max-w-[1200px] mx-auto text-white flex flex-col gap-5 md:flex-row md:gap-16 justify-center lg:gap-36">
                <div className="flex flex-row gap-5">
                    <img
                        className="md:self-start"
                        src="\photos\logo.png"
                        alt=""
                    />
                    <div className="hidden md:block md:h-[200px] md:w-[2px] bg-white rounded" />
                </div>
                <div className="font-playfair flex flex-col gap-2">
                    <h2 className="text-3xl">Support Us</h2>
                    <ul className="flex flex-col gap-2">
                        <li>Donate</li>
                        <li>Projects</li>
                        <li>Learn</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-playfair mb-2">
                            Follow Us
                        </h2>
                        <div className="text-3xl flex flex-row gap-5">
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-playfair">Contact</h2>
                        <p className="font-light text-sm">
                            savingorangutan@example.com
                        </p>
                        <p className="font-light text-sm">+1234 1234 1234</p>
                    </div>
                </div>
            </div>
            <p className="text-xs font-light md:text-center mt-8 text-white md:text-white/50">
                Copyright 2024 - savingorangUtan project{' '}
            </p>
        </footer>
    );
};

export default Footer;
