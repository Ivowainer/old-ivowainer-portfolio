import Image from "next/image";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

export interface WorkCardProps {
    imageUrl: string;
    textPoints: string[];
    charge: string;
    description: string;
    date: string;
    urlProject: string;
}

const WorkCard = ({ charge, date, description, imageUrl, textPoints, urlProject }: WorkCardProps) => {
    return (
        <div className="flex flex-col rounded-xl p-6 bg-[#E5E7EB] dark:bg-[#4B5563]">
            <div className="flex flex-col gap-4 border-b border-gray-400 text-gray-700 dark:text-gray-200 pb-6">
                <div className="flex justify-between">
                    <p className="text-sm">{date}</p>
                    <div className="flex gap-3 items-end dark:text-gray-400 text-gray-500 text-2xl">
                        <Link href={`${urlProject}`} target="_blank" className="hover:text-emerald-500 transition-colors duration-300">
                            <FiExternalLink />
                        </Link>
                    </div>
                </div>
                <p className="text-2xl text-gray-800 dark:text-gray-300">{charge}</p>
                <p className="text-sm">{description}</p>
                <ul className="flex flex-col lg:flex-row list-disc list-ouside px-5 text-base xl:gap-12 flex-wrap text-gray-700 dark:text-gray-300">
                    {textPoints.map((val) => (
                        <li key={val}>{val}</li>
                    ))}
                </ul>
            </div>
            <div className="w-full mt-6 image-to-green">
                <Image width={150} height={300} className="w-1/4 lg:w-1/6" src={imageUrl} alt={`Image Logo Project Work Experience Ivan Campos Wainer`} />
            </div>
        </div>
    );
};

export default WorkCard;
