import Button from '../components/Button';
import HeadingTitle from '../components/HeadingTitle';
import Section from '../components/Section';
import {
    howToHelpThem,
    orangutanFacts,
    whyOrangutansEndangered,
} from '../data/data';

const Learn = () => {
    return (
        <>
            <HeadingTitle title="Meet the orangutans" />
            <div className="p-5 text-center container">
                <div className="lg:mx-auto md:max-w-[700px]">
                    <h2 className="text-2xl font-medium text-primary-black font-playfair lg:text-4xl mb:2 lg:mb-4">
                        Welcome to our Learn page
                    </h2>
                    <p className="text-sm">
                        You can learn about orangutan here
                    </p>
                    <div>
                        <img
                            className="my-4 w-full block"
                            src="\photos\learn.jpg"
                            alt="two orangutans"
                        />
                    </div>
                    <p className="text-sm text-primary-black/80">
                        Orangutan are large primates that inhabit the tropical
                        forest of Kalimantan and Sumatra, Indonesia. They are
                        ones of the species closest to humans and posses complex
                        thinking abilities as well as the use of simple tools
                    </p>
                </div>
            </div>
            <main className="flex flex-col gap-8 lg:gap-0">
                <Section title="Orangutan Facts" more={false}>
                    <ol className="text-primary-black grid gap-2 md:gap-4 md:grid-cols-3 lg:gap-10">
                        {orangutanFacts.map((fact, index) => (
                            <div
                                key={index}
                                className="md:flex md:flex-col md:gap-2"
                            >
                                <li className="list-decimal list-inside text-xl font-medium font-playfair lg:text-2xl">
                                    {fact.title}
                                </li>
                                <span className="text-sm lg:text-base block pl-4 lg:pl-6">
                                    {fact.desc}
                                </span>
                            </div>
                        ))}
                    </ol>
                </Section>
                <Section title="Why are orangutans endangered?" more={false}>
                    <div className="grid gap-6 md:grid-cols-3 md:mt-10 lg:my-12">
                        {whyOrangutansEndangered.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between gap-4 md:flex-col md:justify-start"
                            >
                                <div className="min-w-16 min-h-16 md:w-[5rem] md:h-[5rem] grid place-items-center p-2 md:p-0 md:mx-auto">
                                    <img
                                        className="w-full md:mx-auto"
                                        src={item.icon}
                                        alt="icons"
                                    />
                                </div>

                                <p className="text-lg font-playfair text-primary-red font-semibold tracking-tight">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>
                <Section title="Orangutan Map" more={false}>
                    <div className="lg:mx-auto">
                        <figure>
                            <img
                                src="\photos\orangutan-map.png"
                                alt="Orangutan map"
                            />
                            <figcaption className="text-sm text-center text-primary-black">
                                Orangutan map: Marvdrock from the Noun Project
                            </figcaption>
                        </figure>
                    </div>
                </Section>
                <Section title="How to help them ?" more={false}>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {howToHelpThem.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-primary-green rounded"
                            >
                                <div className="text-center flex flex-col gap-4 h-full lg:justify-between">
                                    <div className="lg:flex flex-col gap-2 lg:mb-4 lg:gap-4">
                                        <div>
                                            <div className="h-[250px] w-full overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="mt-3 text-2xl lg:text-3xl text-primary-yellow font-playfair">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-primary-yellow text-sm lg:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                    {index === howToHelpThem.length - 1 ? (
                                        <div className="text-4xl text-primary-yellow flex flex-row justify-center gap-10">
                                            <i className="fa-brands fa-whatsapp"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-facebook"></i>
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </div>
                                    ) : (
                                        <Button className="bg-primary-yellow text-primary-black py-2 rounded-full font-medium px-20">
                                            Join
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
        </>
    );
};

export default Learn;
