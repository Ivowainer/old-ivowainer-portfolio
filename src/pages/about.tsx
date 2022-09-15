import MainLayout from "../components/layout/MainLayout"
import Me from "../components/ui/About/Me";
import FrontendStack from "../components/ui/About/FrontendStack";
import BackendStack from '../components/ui/About/BackendStack';
import { BiNotepad } from 'react-icons/bi'

const about = () => {
  return (
    <MainLayout pageName="About">
      <div className="relative flex flex-col gap-20 px-20 py-16">
        <div className="flex flex-col">
          <Me />
        </div>

        <div className='flex flex-col gap-5'>  
            <FrontendStack />
            <BackendStack />
        </div>

        
        <a href="https://drive.google.com/file/d/1nX0jZ5ZTemDfu6FXl_-b02XsN72qHd3O/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="fixed text-xl bottom-5 right-3 bg-emerald-500 px-3 py-2 text-white rounded-md"><BiNotepad /></a>
        
      </div>
    </MainLayout>
  )
}

export default about