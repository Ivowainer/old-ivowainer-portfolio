import Link from "next/link"
import { IconType } from 'react-icons';

interface IconRS {
    href: string;
    icon: React.ReactNode;
}

const IconRS = ({ href, icon }: IconRS) => {
  return (
    <Link href={href}>
        <a className="hover:text-indigo-500 transition-colors duration-300">{icon}</a>
    </Link>
  )
}

export default IconRS
