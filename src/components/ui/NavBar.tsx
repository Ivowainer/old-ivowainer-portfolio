import Link from 'next/link';
import { PAGES, PagesNames } from '../../helpers/Pages';
import IconPath from './IconPath';

interface NavBarProps {
    pageName: PagesNames;
}

const NavBar: React.FC<NavBarProps> = ({ pageName }) => {
    return (
        <div className='flex flex-col'>
        <h1 className='font-bold text-2xl'>ICW</h1>

        <nav className='flex flex-col'>
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