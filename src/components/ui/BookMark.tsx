import { BiBookmark } from 'react-icons/bi'

interface CoursesProps {
  text: string;
  description: string;
  date: string;
  lastItem?: boolean;
  height?: string;
}

const Courses = ({ text, lastItem, date, description, height = "h-28" }: CoursesProps) => {
  return (
    <div className='flex flex-col'>
        <div className="flex gap-3 ">
          <div>
              <div className="bg-emerald-300 p-2 flex justify-center items-center text-white rounded-full">
                <BiBookmark />
              </div>
              {!lastItem && <div className={`ml-[.98rem] w-[.5px] ${height}  block bg-gray-300`}></div>}
          </div>

          <div className="flex flex-col gap-1 left-12 top-[.5px]">
            <p className='font-semibold text-gray-700'>{text}</p>
            <p className='font-normal text-sm text-gray-400'>{date}</p>
            <p className='font-normal text-gray-500'>{description}</p>
          </div>
        </div>
        
    </div>
  )
}

export default Courses