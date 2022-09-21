import FrontendStack from "./FrontendStack";
import BackendStack from './BackendStack';

const Technologies = () => {
  return (
    <section className="flex flex-col lg:h-screen 2xl:h-auto justify-center gap-7 px-4 lg:px-24 mt-12 pt-24 border-t border-gray-200" id="knowledge">
        <p className="text-3xl mb-5 dark:text-gray-300 text-gray-700 font-bold">🧑🏾‍💻 Tecnologías</p>
        <div className="px-7 flex flex-col gap-3">
          <FrontendStack />
          <BackendStack />
        </div>
    </section>
  )
}

export default Technologies
