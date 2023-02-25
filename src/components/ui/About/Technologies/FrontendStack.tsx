import CardStack from "./CardStack";

const FullstackStack = () => {
    return (
        <div>
            <p className="py-3 dark:bg-gray-600 dark:text-gray-200 bg-gray-200 text-gray-500 font-bold rounded-t-lg text-center">Front-End Stack</p>{" "}
            {/* dark:border dark:border-gray-400 dark:bg-gray-700 dark:text-gray-100 */}
            <div className="grid gap-2 mt-2 grid-cols-2 lg:grid-cols-6 text-4xl">
                <CardStack icon={<i className="devicon-javascript-plain colored"></i>} />
                <CardStack icon={<i className="devicon-react-original colored"></i>} />
                <CardStack icon={<i className="devicon-tailwindcss-plain colored"></i>} />
                <CardStack icon={<i className="devicon-typescript-plain colored"></i>} />
                <CardStack icon={<i className="devicon-html5-plain colored"></i>} />
                <CardStack icon={<i className="devicon-sass-original colored"></i>} />
                <CardStack className="col-start-1 col-end-3" icon={<i className="devicon-nextjs-line colored"></i>} />
                <CardStack icon={<i className="devicon-css3-plain colored"></i>} />
                <CardStack icon={<i className="devicon-git-plain colored"></i>} />
            </div>
        </div>
    );
};

export default FullstackStack;
