import Link from "next/link"
import { PagesNames, Route } from '../../helpers/Pages';

interface IconPathProps {
    page: Route;
    currentPage: PagesNames;
}

const IconPath: React.FC<IconPathProps> = ({ page, currentPage }) => {
    const { name, IconActive, IconOutlined, path } = page

    return (
        <div>
            <Link href={path}>
                
                    {name === currentPage ? (
                        <a className="text-indigo-500 flex items-center p-1.5">
                            <IconActive />
                        </a>
                    ) : (
                        <a className="hover:bg-indigo-400 hover:text-white hover:rounded-full hover:bg-opacity-95 transition-all duration-500 flex items-center p-1.5 ">
                            <IconOutlined />
                        </a>
                    )}
            </Link>
        </div>
    )
}

export default IconPath