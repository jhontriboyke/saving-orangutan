import Button from './Button';

const Footer = () => {
    return (
        <footer>
            <div>
                <header>
                    <div className="w-full h-[20vh] overflow-hidden">
                        <img
                            className="w-full h-full object-cover filter brightness-[.8]"
                            src="\public\photos\about-3.jpg"
                            alt=""
                        />
                    </div>
                </header>
                <section className="container flex flex-col gap-6">
                    <Button className="bg-primary-red min-w-full">
                        Donate
                    </Button>
                    <Button className="bg-primary-green min-w-full">
                        Join Our Projects
                    </Button>
                    <div className="p-4 bg-primary-yellow rounded-md text-center text-white stroke-white flex flex-col gap-4">
                        <p>Share us to your social media</p>
                        <div className="flex flex-row justify-center gap-8">
                            <div className="cursor-pointer text-3xl">
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>
                            <div className="cursor-pointer text-3xl">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="cursor-pointer text-3xl">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="cursor-pointer text-3xl">
                                <i className="fa-brands fa-x-twitter"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
