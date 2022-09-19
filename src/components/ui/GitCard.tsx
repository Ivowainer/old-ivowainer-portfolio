import { BiBookBookmark } from "react-icons/bi"
import { RepositoriyType } from "../../types/RepositoryTypes"

import LanguagePoint from "./LanguagePoint"

const GitCard = ({ repository }: { repository: RepositoriyType }) => {

  return (
    <div className="flex flex-col p-4 pr-24 rounded-md border border-gray-500 m-5">
        <div className="flex gap-3">
            <BiBookBookmark className="text-gray-500 text-xl"/>
            <p className="font-bold text-gray-500">{repository.name}</p>
        </div>

        <p className="text-start py-4 text-gray-500">{repository.description}</p>

        <div className="flex gap-4 text-gray-500 text-sm">
            <LanguagePoint color="yellow-500" language="Javascript"/>
            <LanguagePoint color="black" language="NextJS"/>
            <LanguagePoint color="sky-500" language="React"/>
            <LanguagePoint color="sky-500" language="React"/>
        </div>
    </div>
  )
}

export default GitCard