import HeadingTitle from '../components/HeadingTitle';
import Section from '../components/Section';
import { contact, helpUs, ourMissions, team } from '../data/data';

const About = () => {
    return (
        <>
            <HeadingTitle title="About Us" />
            <main className="flex flex-col gap-8 lg:gap-0">
                <div>
                    <Section title="Our Mission" more={false}>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                            {ourMissions.map((mission, index) => (
                                <div
                                    key={index}
                                    className="text-center lg:flex lg:flex-col gap-2"
                                >
                                    <div>
                                        <h3
                                            className={`text-xl lg:text-2xl font-playfair font-bold mb-2 ${mission.color}`}
                                        >
                                            {mission.title}
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-sm max-w-[80%] mx-auto text-primary-black md:text-base">
                                            {mission.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                    <div className="w-full h-[40vh] relative">
                        <img
                            className="w-full h-full object-cover block filter brightness-50"
                            src="\photos\our-mission.jpg"
                            alt="our mission"
                        />
                        <img
                            className="absolute top-4 right-4"
                            src="\photos\logo.png"
                            alt="logo"
                        />
                    </div>
                </div>
                <Section title="Our Team" more={false}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                        {team.map((person, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 text-center "
                            >
                                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded overflow-hidden self-center">
                                    <img
                                        className="block h-full w-full object-cover"
                                        src={person.image}
                                        alt={person.name}
                                    />
                                </div>
                                <h3 className="text-xl font-playfair text-primary-black font-medium md:text-2xl">
                                    {person.name}
                                </h3>
                                <div className="flex flex-row items-center text-xl  justify-center gap-4">
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
                <Section title="Contact" more={false}>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        {contact.map((item, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <h3 className="text-xl font-medium font-playfair">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>
                <Section title="Help Us With" more={false}>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {helpUs.map((item, index) => (
                            <div
                                key={index}
                                className="text-center flex flex-col gap-1"
                            >
                                <div className="max-h-[10rem] lg:h-[15rem]">
                                    <img
                                        className="w-full h-full object-cover block"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold font-playfair ">
                                    {item.title}
                                </h3>
                                <p className="text-sm lg:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
        </>
    );
};

export default About;
