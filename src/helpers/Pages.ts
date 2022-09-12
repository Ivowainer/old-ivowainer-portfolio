import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { IconType } from 'react-icons'

export interface Route {
    name: PagesNames;
    path: string;
    IconActive: IconType;
    IconOutlined: IconType;
}

export type PagesNames = "Home" | "About" | "Education" | "Projects" | "Contact"

export const PAGES: Route[] = [
    {
        name: 'Home',
        path: '/',
        IconActive: AiFillHome,
        IconOutlined: AiOutlineHome,
    },
    /* {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Education',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/'
    },
    {
        name: 'Contact',
        path: '/'
    }, */
]