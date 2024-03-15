import Button from '../components/Button';
import HeadingTitle from '../components/HeadingTitle';
import Section from '../components/Section';
import { news } from '../data/data';

const News = () => {
    return (
        <>
            <HeadingTitle title="News" />
            <p className="text-sm md:text-base text-center max-w-[80%] md:max-w-[60%] mx-auto">
                Explore the latest news articles, success stories, and
                conservation efforts that are making a real difference for these
                remarkable creatures
            </p>
            <main className="flex flex-col gap-8 lg:gap-0">
                <Section>
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        {news.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-2 gap-5 h-[200px]"
                            >
                                <div className="text-primary-black">
                                    <h3 className="text-2xl lg:text-3xl font-semibold font-playfair">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                                <div>
                                    <img
                                        className="h-full w-full block object-cover"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mx-auto mt-4">
                        <Button className="bg-primary-green py-2">More</Button>
                    </div>
                </Section>
            </main>
        </>
    );
};

export default News;
