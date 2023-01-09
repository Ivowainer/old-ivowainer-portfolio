import { PROJECTS } from "../../../../helpers/Projects";
import CardProject from "./CardProject";

const Projects = () => {
    return (
        <section className="flex flex-col  gap-7" id="projects">
            <p className="text-3xl mb-5 dark:text-gray-300 text-gray-700 font-bold">✏️ Remarkable projects</p>
            <div className="px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {PROJECTS.map((value) => (
                    <CardProject key={value.name} project={value} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
