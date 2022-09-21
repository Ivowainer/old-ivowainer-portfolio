import Me from "./Me";

import { BiNotepad, BiCoffeeTogo } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'

import NumberCard from "./NumberCard";

const AboutIndex = () => {
  return (
    <div className="px-6 lg:px-20 lg:h-screen 2xl:h-auto flex flex-col gap-14">
        <div className="flex flex-col">
          <Me />
        </div>

        <div className='flex justify-evenly text-gray-500 dark:text-gray-300'>
            <NumberCard icon={<BsBriefcase />} number={10} text={"projects completed"}/>
            <NumberCard icon={<BiCoffeeTogo />} number={120} text={"coffe consumed"}/>
        </div>
        <a href="https://drive.google.com/file/d/1nX0jZ5ZTemDfu6FXl_-b02XsN72qHd3O/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="hidden lg:block fixed text-xl bottom-5 right-5 bg-emerald-500 px-3 py-2 text-white rounded-md"><BiNotepad /></a>
    </div>
  )
}

export default AboutIndex
