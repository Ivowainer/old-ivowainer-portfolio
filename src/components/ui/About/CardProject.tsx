import { FiExternalLink, FiFolder } from 'react-icons/fi'

const CardProject = () => {

    return (
        <div className="flex flex-col px-8 py-6 rounded-md bg-gray-200 gap-6">
            <div className="flex justify-between">
                <FiFolder className="text-4xl text-emerald-500" />
                <FiExternalLink className="text-gray-500 text-2xl"/>
            </div>

            <div className="flex flex-col gap-2">
                <p className='text-gray-700 font-bold'>ManageWainer_mern</p>

                <div className="">
                    <p className='text-gray-600 font-normal'>It's a ProjectManager to keep your projects organized; You can register by a real gmail and add a real collaborators who can complete the task</p>
                    <p></p>
                </div>
            </div>

            <div className="flex flex-wrap text-gray-500 text-sm gap-3">
                <p>Express |</p>
                <p>MongoDB |</p>
                <p>Tailwind |</p>
                <p>React</p>
                <p>JavaScript</p>
                <p>JWT</p>
            </div>
        </div>
    )
}

export default CardProject
