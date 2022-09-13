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
                        <a className="text-cyan-500">
                            <IconActive />
                        </a>
                    ) : (
                        <a>
                            <IconOutlined />
                        </a>
                    )}
            </Link>
        </div>
    )
}

export default IconPath