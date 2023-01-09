import { WorkCardProps } from "./WorkCard";

import WorkCard from "./WorkCard";

const WorkData: WorkCardProps[] = [
    {
        charge: "Frontend Developer Freelance",
        date: "December 2022 - January 2023",
        description: 'Development and integration of customized IT solutions for "Clinica Selva Amazonica"',
        imageUrl: "/projects/selvamazonica_logo.png",
        textPoints: ["Development of responsive user interfaces for mobile devices and desktops", "Personalized content through CMS Sanity"],
    },
];

const WorkIndex = () => {
    return (
        <section className="flex flex-col gap-7 ">
            <p className="text-3xl mb-5 dark:text-gray-300 text-gray-700 font-bold">💼 Work Experience</p>
            <div className="px-7">
                {WorkData.map((val) => (
                    <WorkCard key={val.description} charge={val.charge} date={val.date} description={val.description} imageUrl={val.imageUrl} textPoints={val.textPoints} />
                ))}
            </div>
        </section>
    );
};

export default WorkIndex;
