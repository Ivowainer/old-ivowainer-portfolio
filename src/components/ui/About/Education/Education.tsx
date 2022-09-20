import BookMark from "./BookMark"

const Education = () => {
  return (
    <section className=" lg:px-10 pt-10" id="education">
        <p className="px-4 lg:px-10 text-3xl text-gray-600 font-bold">🎓 Educación</p>
        <div className="flex flex-col px-10 lg:w-7/12 lg:pl-20 mt-10" >
            <BookMark text="Lic. Ciencias Computación" date="2022 - Actualmente" description="Licenciatura en Ciencias de la computación; UNR (Universidad Nacional de Rosario), FCEIA (Ciencias Exactas, Ingeniería y Agrimensura)"/>
            <BookMark text="Curso NextJS" date="2022 - Actualmente" description="Next.js: El framework de React para producción | del profesor Fernando Herrera en Udemy" height="h-32 lg:h-24" />
            <BookMark text="Curso ReactJS" date="2022 - Actualmente" description="React - La Guía Completa: Hooks Context Redux MERN +15 Apps | del profesor Juan Pablo de la Torre Valdez en Udemy" />
            <BookMark text="Curso Git" date="Realizado el 13 de mar. 2021" description="Curso gratuito de RocketCode" height="h-24" />
            <BookMark text="Curso PHP & MySql" date="Adquirido el 24 de Oct. 2019" description="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL | del profesor Juan Pablo de la Torre Valdez en Udemy" />
            <BookMark text="Instituto Belgrano 2060" date="2018 - 2022" description="Secundaria situada en Rosario, Santa Fe; titulo en 'Bachiller en comunicación'. Con orientación en comunicación, artes, diseño y programación" lastItem={true}/>
        </div>
    </section>
  )
}

export default Education
