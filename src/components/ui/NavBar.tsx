import { PAGES, PagesNames } from '../../helpers/Pages';
import DLButton from './DLButton';
import IconPath from './IconPath';

interface NavBarProps {
    pageName: string;
}

const NavBar: React.FC<NavBarProps> = ({ pageName }) => {
    return (
        <div className='flex w-screen lg:w-auto lg:dark:bg-gray-700 dark:bg-gray-600 lg:flex-col justify-between items-center px-6 py-8 gap-12 lg:gap-20 h-full text-gray-500'>
            <h1 className='font-bold text-3xl text-emerald-500'>ICW</h1>

            <nav className='flex lg:flex-col justify-between gap-3 lg:gap-8 text-2xl'>
                {PAGES.map(page => (
                    <IconPath  key={page.name} page={page} currentPage={pageName} />
                ))}
            </nav>

            <DLButton />
        </div>
    )
}

export default NavBar