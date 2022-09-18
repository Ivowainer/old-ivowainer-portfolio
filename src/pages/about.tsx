import MainLayout from "../components/layout/MainLayout"
import Me from "../components/ui/About/Me";
import BookMark from "../components/ui/BookMark"

import { BiNotepad, BiCoffeeTogo } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'

import FrontendStack from "../components/ui/About/FrontendStack";
import BackendStack from '../components/ui/About/BackendStack';
import NumberCard from "../components/ui/NumberCard";

const about = () => {

  return (
    <MainLayout pageName="About">
      <div className="py-10">
        <div className="px-20 relative h-screen flex flex-col gap-14">
          <div className="flex flex-col">
            <Me />
          </div>

          <div className='flex justify-evenly text-gray-500'>
              <NumberCard icon={<BsBriefcase />} number={10} text={"projects completed"}/>
              <NumberCard icon={<BiCoffeeTogo />} number={120} text={"coffe consumed"}/>
          </div>
          <a href="https://drive.google.com/file/d/1nX0jZ5ZTemDfu6FXl_-b02XsN72qHd3O/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="fixed text-xl bottom-5 right-5 bg-emerald-500 px-3 py-2 text-white rounded-md"><BiNotepad /></a>
        </div>

        <section className="px-10 pt-10" id="education">
            <p className="px-10 text-3xl text-gray-600 font-bold">🎓 Educación</p>
            <div className="flex pl-20 mt-10" >
              <div className="flex flex-col w-7/12">
                <BookMark text="Lic. Ciencias Computación" date="2022 - Actualmente" description="Licenciatura en Ciencias de la computación; UNR (Universidad Nacional de Rosario), FCEIA (Ciencias Exactas, Ingeniería y Agrimensura)" />
                <BookMark text="Curso NextJS" date="2022- Actualmente" description="Next.js: El framework de React para producción | del profesor Fernando Herrera en Udemy" height="h-24" />
                <BookMark text="Curso ReactJS" date="2022 - Actualmente" description="React - La Guía Completa: Hooks Context Redux MERN +15 Apps | del profesor Juan Pablo de la Torre Valdez en Udemy" />
                <BookMark text="Curso Git" date="Realizado el 13 de mar. 2021" description="Curso gratuito de RocketCode" height="h-20" />
                <BookMark text="Curso PHP & MySql" date="Adquirido el 24 de Oct. 2019" description="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL | del profesor Juan Pablo de la Torre Valdez en Udemy" />
                <BookMark text="Instituto Belgrano 2060" date="2018 - 2022" description="Secundaria situada en Rosario, Santa Fe; titulo en 'Bachiller en comunicación'. Con orientación en comunicación, artes, diseño y programación" lastItem={true}/>
              </div>
            </div>
        </section>

        <section className="flex flex-col gap-3 px-24 mt-16 pt-16 border-t border-gray-200">
          <FrontendStack />
          <BackendStack />
        </section>
      </div>
    </MainLayout>
  )
}

export default about