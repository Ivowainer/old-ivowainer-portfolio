import type { NextPage } from 'next'
import MainLayout from '../components/layout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout pageName='Home'>
      <div className='relative h-screen flex flex-col w-full items-center justify-center text-gray-500'>
        <p className='text-4xl font-bold'>Ivan <span className='text-cyan-500'>Campos</span> Wainer</p>
        <p className='text-xl font-semibold'><span className='text-cyan-500'>Frontend</span> Web Developer</p>

        <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home