import { PAGES, PagesNames } from '../../helpers/Pages';
import IconPath from './IconPath';
import { BsSun } from 'react-icons/bs'

interface NavBarProps {
    pageName: PagesNames;
}

const NavBar: React.FC<NavBarProps> = ({ pageName }) => {
    return (
        <div className='flex flex-col justify-between items-center px-6 py-8 gap-20 h-full text-gray-500'>
            <h1 className='font-bold text-3xl text-emerald-500'>ICW</h1>

            <nav className='flex flex-col justify-between gap-8 text-2xl'>
                {PAGES.map(page => (
                    <IconPath  key={page.name} page={page} currentPage={pageName} />
                ))}
            </nav>

            <div className="text-xl px-1 py-1 border border-gray-500 rounded-md">
                <BsSun />
            </div>
        </div>
    )
}

export default NavBar