import Link from 'next/link';
import { PAGES, PagesNames } from '../../helpers/Pages';
import IconPath from './IconPath';

interface NavBarProps {
    pageName: PagesNames;
}

const NavBar: React.FC<NavBarProps> = ({ pageName }) => {
    return (
        <div className='flex flex-col items-center px-7 py-8 gap-20 h-full'>
            <h1 className='font-bold text-3xl'>ICW</h1>

            <nav className='flex flex-col text-2xl justify-between h-1/2'>
                {PAGES.map(page => (
                    <>
                        <IconPath page={page} currentPage={pageName} />
                    </>
                ))}
            </nav>
        </div>
    )
}

export default NavBar