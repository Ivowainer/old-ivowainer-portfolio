import CardProject from "./CardProject";

const Projects = () => {
  return (
    <section className="flex flex-col mt-32 px-4 gap-7 lg:px-24" id="projects">
        <p className="text-3xl mb-5 text-gray-700 font-bold">💼 Proyectos Destacables</p>
        <div className="px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
    </section>
  )
}

export default Projects
