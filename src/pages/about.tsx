import MainLayout from "../components/layout/MainLayout"
import Me from "../components/ui/About/Me";
import FrontendStack from "../components/ui/About/FrontendStack";
import BackendStack from '../components/ui/About/BackendStack';

const about = () => {
  return (
    <MainLayout pageName="About">
      <div className="relative h-screen grid md:grid-cols-2 gap-20 px-20 py-16">
        <div className="flex flex-col">
          <Me />
        </div>

        <div className='flex flex-col gap-5'>  
            <FrontendStack />
            <BackendStack />
        </div>
        <button className="absolute bottom-5 right-5 bg-indigo-500 px-4 py-2 text-sm text-white rounded-md">Descargar CV</button>
      </div>
    </MainLayout>
  )
}

export default about