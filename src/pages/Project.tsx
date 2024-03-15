import Button from '../components/Button';
import HeadingTitle from '../components/HeadingTitle';
import Section from '../components/Section';
import { projectPage } from '../data/data';

const Project = () => {
    return (
        <>
            <HeadingTitle title="Projects" />
            <main>
                <div className="container grid gap-8 lg:gap-10 lg:grid-cols-2">
                    {projectPage.map((project, index) => (
                        <Section key={index} title={project.title} more={false}>
                            <div className="h-full flex flex-col gap-4 justify-between">
                                <div>
                                    <div>
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                        />
                                    </div>
                                    <p className="mt-2 lg:mt-4 text-sm lg:text-base leading-6 lg:leading-8">
                                        {project.desc}
                                    </p>
                                </div>
                                <Button className="bg-primary-green text-white mx-0 min-w-full lg:text-lg mt-auto py-3 lg:py-4">
                                    Join project
                                </Button>
                            </div>
                        </Section>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Project;
