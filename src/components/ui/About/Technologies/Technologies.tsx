import FullstackStack from "./FullstackStack";
import BackendStack from "./BackendStack";

const Technologies = () => {
    return (
        <section className="flex flex-col  justify-center gap-7 pt-24 border-t border-gray-200" id="knowledge">
            <p className="text-3xl mb-5 dark:text-gray-300 text-gray-700 font-bold">🧑🏾‍💻 Technologies</p>
            <div className="px-7 flex flex-col gap-3">
                <FullstackStack />
                <BackendStack />
            </div>
        </section>
    );
};

export default Technologies;
