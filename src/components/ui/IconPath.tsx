import Link from "next/link"
import { PagesNames, Route } from '../../helpers/Pages';

interface IconPathProps {
    page: Route;
    currentPage: string;
}

const IconPath: React.FC<IconPathProps> = ({ page, currentPage }) => {
    const { name, IconActive, IconOutlined, path } = page

    return (
        <div>
            <Link href={path}>
                
                    {name === currentPage ? (
                        <a className="dark:text-emerald-600 text-emerald-500 flex items-center p-1.5">
                            <IconActive />   
                        </a>
                    ) : (
                        <a className="dark:text-gray-200 dark:hover:bg-emerald-600 hover:bg-emerald-400 hover:text-white hover:rounded-full hover:bg-opacity-95 transition-all duration-500 flex items-center p-1.5 ">
                            <IconOutlined />
                        </a>
                    )}
            </Link>
        </div>
    )
}

export default IconPath