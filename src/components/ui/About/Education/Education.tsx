import { EducationBookMarkInfo } from "../../../../helpers/EducationInfo";

import BookMark from "./BookMark";

const Education = () => {
    return (
        <section id="education">
            <p className="text-3xl dark:text-gray-300 text-gray-600 font-bold">🎓 Education</p>
            <div className="flex flex-col px-10 lg:w-7/12 mt-10">
                {EducationBookMarkInfo.map((val) => (
                    <BookMark key={val.text} date={val.date} description={val.description} text={val.text} height={val.height} lastItem={val.lastItem} />
                ))}
            </div>
        </section>
    );
};

export default Education;
