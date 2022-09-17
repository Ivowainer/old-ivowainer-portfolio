import MainLayout from "../components/layout/MainLayout"
import Me from "../components/ui/About/Me";
import BookMark from "../components/ui/BookMark"

import { BiNotepad, BiCoffeeTogo } from 'react-icons/bi'
import { HiOutlineBookOpen } from 'react-icons/hi'

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
              <NumberCard icon={<HiOutlineBookOpen />} number={5} text={"courses completed"}/>
              <NumberCard icon={<BiCoffeeTogo />} number={120} text={"coffe consumed"}/>
          </div>
          <a href="https://drive.google.com/file/d/1nX0jZ5ZTemDfu6FXl_-b02XsN72qHd3O/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="fixed text-xl bottom-5 right-5 bg-emerald-500 px-3 py-2 text-white rounded-md"><BiNotepad /></a>
        </div>

        <section className="px-10 flex justify-between" id="education">
          <div>
            <p className="px-10 text-3xl text-gray-600 font-bold">🎓 Educación</p>
            <div className="flex pl-20 mt-10" >
              <div className="flex flex-col w-8/12">
                <BookMark text="Freelance Job" date="Released on December 7th, 2021" description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages." />
                <BookMark text="Freelance Job" date="Released on December 7th, 2021" description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages." />
                <BookMark text="Freelance Job" date="Released on December 7th, 2021" description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages." lastItem={true} />
                
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-3xl text-gray-600 font-bold">📂 Archivos</p>
            <div className="flex px-20 mt-10" >
              
            </div>
          </div>
        </section>

        <section className="px-24 mt-16 pt-16 border-t border-gray-200">
          <FrontendStack />
        </section>
      </div>
    </MainLayout>
  )
}

export default about