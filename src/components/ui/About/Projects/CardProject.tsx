import Link from "next/link";

import { FiExternalLink, FiFolder } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

import { ProjectsInterface } from "../../../../helpers/Projects";

interface CardProjectProps {
    project: ProjectsInterface;
}

const CardProject = ({ project }: CardProjectProps) => {
    return (
        <div className="flex flex-col justify-between px-8 py-6 rounded-md dark:bg-gray-600 bg-gray-200 gap-6">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <FiFolder className="text-4xl dark:text-emerald-600 text-emerald-500" />
                    <div className="flex gap-3 items-end dark:text-gray-400 text-gray-500 text-2xl">
                        <Link href={`${project.github}`} target="_blank" className="hover:text-emerald-500 transition-colors duration-300">
                            <AiOutlineGithub />
                        </Link>
                        <Link href={`${project.link}`} target="_blank" className="hover:text-emerald-500 transition-colors duration-300">
                            <FiExternalLink />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="dark:text-gray-200 text-gray-700 font-bold">{project.name}</p>
                    <p className="dark:text-gray-400 text-gray-600 font-normal">{project.description}</p>
                </div>
            </div>

            <div className="flex flex-wrap dark:text-gray-300 text-gray-500 text-sm gap-3">
                {project.languages.map((value) => (
                    <p key={value}>{value}</p>
                ))}
            </div>
        </div>
    );
};

export default CardProject;
