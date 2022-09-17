import { AiOutlineHome, AiFillHome, AiOutlineMail } from 'react-icons/ai'
import { RiUserFill, RiUserLine } from 'react-icons/ri'
import { HiOutlineAcademicCap, HiAcademicCap } from 'react-icons/hi'
import { BsBriefcaseFill, BsBriefcase } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

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
    {
        name: 'About',
        path: '/about',
        IconActive: RiUserFill,
        IconOutlined: RiUserLine
    },
    {
        name: 'Projects',
        path: '/projects',
        IconActive: BsBriefcaseFill,
        IconOutlined: BsBriefcase
    },
    {
        name: 'Contact',
        path: '/contact',
        IconActive: MdEmail,
        IconOutlined: AiOutlineMail
    },
]