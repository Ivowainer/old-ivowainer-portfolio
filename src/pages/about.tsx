import MainLayout from "../components/layout/MainLayout"

const about = () => {
  return (
    <MainLayout pageName="About">
      <div className='h-screen flex items-center justifty-center'>
        <p className='text-gray-600 text-3xl font-bold'>👋 Hola , Good Day !</p>
      </div>
    </MainLayout>
  )
}

export default about