import Image from 'next/image'
import Link from 'next/link'

const Me = () => {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-3 text-gray-400 mt-10 text-lg gap-5 items-center justify-items-start'>
        <div className='col-start-1 col-end-3 lg:mr-10'>
          <p className='text-gray-500 text-[1.6rem] font-bold'>👋 Hola! Mi nombre es Iván pero puedes decirme Ivo :))</p>
          <p className='mt-10'>Me considero una persona sociable y responsable, alguien quien tiene mucho que compartir y recibir; Soy receptivo y completamente abierto a nuevas sugerencias y formas de trabajo.</p>
          <p>Todas mis <Link href="#knowledge"><a className='text-emerald-500 hover:underline cursor-pointer'> habilidades y conocimientos</a></Link> adquiridos a lo largo de estos años fueron de manera autodidacta. Debido al mundo de las TI, conocí amigos que me ayudaron en este camino.</p>
        </div>

        <div className="hidden lg:flex relative mb-6">
          <Image src="/ImageProfile.jpg" width={420} height={280}  alt="ImageProfile Ivan Campos Wainer" className='z-10 transition duration-500 rounded-md'/>
          <div className="absolute border-2 border-emerald-500 w-60 h-36 xl:w-80 xl:h-56 right-[-20px] bottom-[-28px] rounded-md"></div>
        </div>

        <p className="col-start-1 col-end-4">Además de la programación, tengo otras aficiones también, como ser un apasionado por la música; toco la guitarra y mi instrumento principal, el piano. También me gusta salir con amigos y andar en patineta. Me encantan tanto los días soleados como los lluviosos, en ambos puedo aprovecharlos al máximo.</p>
    </div>
  )
}

export default Me