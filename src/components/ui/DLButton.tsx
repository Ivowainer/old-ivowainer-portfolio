import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { BsSun } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'

const DLButton = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="text-xl px-1 py-1 border cursor-pointer dark:border-gray-400 border-gray-500 rounded-md">
            {theme === 'light' ? (
                <BsSun className='dark:text-gray-400' />
            ) : (
                <BiMoon className='dark:text-gray-400' />
            )}
        </div>
    )
}

export default DLButton
