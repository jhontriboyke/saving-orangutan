import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Section from '../components/Section';
import { aboutUs, dangerList, news, ourProjects } from '../data/data';

const Home = () => {
    return (
        <>
            <header className="h-[80vh] lg:h-[100vh] relative grid place-items-center overflow-hidden">
                <div className="absolute inset-0 -z-10 w-full h-full">
                    <img
                        className="block filter brightness-[.7] w-full h-full object-cover"
                        src="\photos\hero.jpg"
                        alt="hero"
                    />
                </div>
                <section className="h-[80%] md:h-[50%] lg:h-[30%] text-white flex flex-col justify-between">
                    <h1 className="font-playfair text-4xl lg:text-6xl font-extrabold flex flex-col gap-1 text-center">
                        <span>They are in danger</span>
                        <span>
                            <b className="text-primary-red">We</b> need to help
                            them
                        </span>
                    </h1>
                    <Button className="bg-primary-red hover:bg-primary-red-darker lg:text-base">
                        <Link to={'/donate'}>Donate Now</Link>
                    </Button>
                </section>
            </header>
            <main className="flex flex-col gap-5">
                <Section>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 lg:grid-cols-3">
                        {dangerList.map((list, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-1 items-center text-center"
                            >
                                <img
                                    className="w-10 h-10"
                                    src={list.icon}
                                    alt={list.title}
                                />
                                <h3 className="font-playfair text-xl tracking-tight text-primary-red font-medium">
                                    {list.title}
                                </h3>
                                <p className="text-sm text-primary-black max-w-[80%] sm:max-w-full">
                                    {list.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>
                <Section title="About Us" more={'about'}>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {aboutUs.map((item, index) => (
                            <div key={index}>
                                <div className="md:h-[15rem] lg:h-[20rem]">
                                    <img
                                        className="md:mx-auto h-full w-full object-cover"
                                        src={item.image}
                                        alt={item.desc}
                                    />
                                </div>
                                <p className="mt-2 text-base tracking-tight text-primary-black text-center">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Button className="bg-primary-green lg:hidden">
                        See More About Us
                    </Button>
                </Section>
                <Section title="Our Projects" more={'project'}>
                    <div className="grid gap-6 lg:gap-2">
                        {ourProjects.map((project, index) => (
                            <div
                                key={index}
                                className="flex bg-primary-green rounded-sm px-3 py-5 gap-3"
                            >
                                <div className="min-w-[10rem] md:min-w-[15rem] lg:min-w-[30rem]">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>
                                <div className="flex flex-col gap-1 lg:p-5 lg:justify-center lg:gap-4">
                                    <h3 className="font-playfair text-xl text-primary-yellow font-medium lg:text-4xl">
                                        {project.title}
                                    </h3>
                                    <p className="line-clamp-6 text-white text-sm lg:text-base lg:tracking-wide lg:leading-6">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className="bg-primary-green lg:hidden">
                        See More Our Projects
                    </Button>
                </Section>
                <Section title="Recent News" more={'news'}>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {news.slice(0, 2).map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-3 lg:gap-0 cursor-pointer"
                            >
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-playfair text-xl md:text-2xl  font-semibold text-primary-black tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm line-clamp-6 lg:text-base text-primary-black">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="block min-w-[10rem] md:min-w-[15rem] xl:min-w-[20rem] overflow-hidden">
                                    <img
                                        className="block w-full h-full object-cover"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className="bg-primary-green lg:hidden">
                        See More Recent News
                    </Button>
                </Section>
            </main>
        </>
    );
};

export default Home;
