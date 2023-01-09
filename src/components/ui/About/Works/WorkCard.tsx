import Image from "next/image";
import Link from "next/link";

export interface WorkCardProps {
    imageUrl: string;
    textPoints: string[];
    charge: string;
    description: string;
    date: string;
}

const WorkCard = ({ charge, date, description, imageUrl, textPoints }: WorkCardProps) => {
    return (
        <Link href="https://www.clinicaselvaamazonica.com/" target={"_blank"} className="flex flex-col rounded-xl p-6 bg-[#E5E7EB] dark:bg-[#4B5563] hover:scale-110 transition-transform">
            <div className="flex flex-col gap-4 border-b border-gray-400 text-gray-700 dark:text-gray-200 pb-6">
                <p className="text-sm">{date}</p>
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
        </Link>
    );
};

export default WorkCard;
