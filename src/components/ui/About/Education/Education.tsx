import BookMark from "./BookMark"

const Education = () => {
  return (
    <section className=" lg:px-10 pt-10 mt-24" id="education">
        <p className="px-4 lg:px-10 text-3xl dark:text-gray-300 text-gray-600 font-bold">🎓 Education</p>
        <div className="flex flex-col px-10 lg:w-7/12 lg:pl-20 mt-10" >
            <BookMark text="Coderhouse - Programacion Backend" date="Cursando en 2022" description="Modern application development with NodeJS, MongoDB and asynchronous techniques; I work on SQL and NoSQL databases, mastering data management efficiently, agilely and with great ease of scalability." height="h-36"/>
            <BookMark text="Lic. Ciencias de la Computación" date="Cursando en 2022" description="Bachelor of Computer's Science in the FCEIA (Ciencias Exactas, Ingeniería y Agrimensura), UNR (Universidad Nacional de Rosario) "/>
            <BookMark text="Course NextJS" date="Cursando en 2022" description="Next.js: El framework de React para producción | del profesor Fernando Herrera en Udemy" height="h-32 lg:h-24" />
            <BookMark text="Course ReactJS" date="2021" description="React - La Guía Completa: Hooks Context Redux MERN +15 Apps | del profesor Juan Pablo de la Torre Valdez en Udemy" />
            <BookMark text="Course Git" date="2021" description="Free RocketCode course" height="h-24" />
            <BookMark text="Course PHP & MySql" date="2019" description="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL | del profesor Juan Pablo de la Torre Valdez en Udemy" />
            <BookMark text="Instituto Belgrano 2060" date="2018 - 2022" description="High school located in Rosario, Santa Fe; Degree in 'Bachelor in Communication'. With orientation in communication, arts, design and programming" lastItem={true}/>
        </div>
    </section>
  )
}

export default Education
