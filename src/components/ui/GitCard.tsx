import { BiBookBookmark } from "react-icons/bi"

import LanguagePoint from "./LanguagePoint"

const GitCard = () => {

  return (
    <div className="flex flex-col p-4 pr-24 w-1/2 rounded-md border border-gray-500 m-5">
        <div className="flex gap-3">
            <BiBookBookmark className="text-gray-500 text-xl"/>
            <p className="font-bold text-gray-500">Lorem Ipsum asfjhaskjfhkjashfasf</p>
        </div>

        <p className="text-start py-4 text-gray-500">asfasfasfasfasfsfaasfasfasfasfasf asfhasjhf asfasf asf</p>

        <div className="flex gap-4 text-gray-500 text-sm">
            <LanguagePoint color="bg-yellow-500" language="Javascript"/>
            <LanguagePoint color="bg-black" language="NextJS"/>
            <LanguagePoint color="bg-sky-500" language="React"/>
            <LanguagePoint color="bg-sky-500" language="React"/>
        </div>
    </div>
  )
}

export default GitCard