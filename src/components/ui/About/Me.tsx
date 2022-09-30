import Image from 'next/image'
import Link from 'next/link'

const Me = () => {  
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-3 text-gray-400 mt-10 text-lg gap-5 items-center justify-items-start'>
        <div className='col-start-1 col-end-3 lg:mr-10'>
          <p className='dark:text-gray-300 text-gray-500 text-[1.6rem] font-bold'>👋 Hi! Mi name is Iván but you can tell me Ivo</p>
          <p className='mt-10'>I consider myself a sociable and responsible person, someone who has much to share and receive; I am receptive and completely open to new suggestions and ways of working.</p>
          <p>All my<Link href="#knowledge"><a className='text-emerald-500 hover:underline cursor-pointer'> skills and knowledge</a></Link>  acquired over these years were self-taught. Because of the IT world, I had the opportunity to meet colleagues that helped in my way to become a developer.</p>
        </div>

        <div className="hidden lg:flex relative mb-6">
          <Image src="/ImageProfile.jpg" width={420} height={280}  alt="ImageProfile Ivan Campos Wainer" className='z-10 transition duration-500 rounded-md'/>
          <div className="absolute border-2 border-emerald-500 w-60 h-36 xl:w-80 xl:h-56 right-[-20px] bottom-[-28px] rounded-md"></div>
        </div>

        <p className="col-start-1 col-end-4">I also have hobbies, being play the guitar, the piano (my favorite instrument), I like to go out with friends and skateboard. I also do strength training at the gym almost daily. I love both sunny and rainy days because I can make the most of them.</p>
    </div>
  )
}

export default Me