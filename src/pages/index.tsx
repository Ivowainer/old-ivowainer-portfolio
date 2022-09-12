import type { NextPage } from 'next'
import MainLayout from '../components/layout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout pageName='Home'>
      <div className='h-screen flex items-center justifty-center'>
        <p className='text-3xl font-bold'>Ivan Campos Wainer</p>
        <p>Web Developer and UI Designer</p>
      </div>
    </MainLayout>
  )
}

export default Home
