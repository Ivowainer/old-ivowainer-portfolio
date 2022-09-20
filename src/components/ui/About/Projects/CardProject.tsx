import { FiExternalLink, FiFolder } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'

const CardProject = () => {

    return (
        <div className="flex flex-col px-8 py-6 rounded-md bg-gray-200 gap-6">
            <div className="flex justify-between">
                <FiFolder className="text-4xl text-emerald-500" />
                <div className="flex gap-3 items-end text-gray-500 text-2xl">
                    <Link href="https://github.com/Ivowainer/ManageWainer_mern">
                        <a className='hover:text-emerald-500 transition-colors duration-300'><AiOutlineGithub /></a>
                    </Link>
                    <Link href="https://wainermanager.netlify.app/">
                        <a className='hover:text-emerald-500 transition-colors duration-300'><FiExternalLink /></a>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className='text-gray-700 font-bold'>ManageWainer_mern</p>

                <p className='text-gray-600 font-normal'>It&apos;s a ProjectManager to keep your projects organized; you can register by a real gmail and add a real collaborators who can complete the task</p>
            </div>

            <div className="flex flex-wrap text-gray-500 text-sm gap-3">
                <p>Express |</p>
                <p>MongoDB |</p>
                <p>Tailwind |</p>
                <p>React |</p>
                <p>JavaScript |</p>
                <p>JWT |</p>
            </div>
        </div>
    )
}

export default CardProject
