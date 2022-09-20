
interface LanguagePointProps {
    language: Language;
}

export type Language = 'Javascript' | 'Typescript' | 'Prisma' | 'MongoDB' | 'React' | 'Typescript' | 'NextJS' | 'PHP' | 'MySQL' | 'CSS' | 'Express' | 'Tailwind' | 'JWT' | 'Socket.IO'

const LanguagePoint = ({language }: LanguagePointProps) => {

    const getLanguageColor = (language: Language) => {
        if(language === 'Javascript') return 'yellow-500'
        if(language === 'Tailwind') return 'cyan-400'
        if(language === 'CSS') return 'blue-500'
        if(language === 'MongoDB') return 'green-300'
        if(language === 'MySQL') return 'orange-300'
        if(language === 'NextJS') return 'black'
        if(language === 'PHP') return 'purple-300'
        if(language === 'Prisma') return 'gray-800'
        if(language === 'React') return 'sky-600'
        if(language === 'Typescript') return 'blue-600'
        if(language === 'Express') return 'orange-600'
        /* if(language === 'Tailwind') return 'cyan-400' */
    }

    return (
        <div className="flex items-center gap-2">
            <div className={`bg-${getLanguageColor(language)} w-2 h-2 rounded-full`}></div>
            <p>{language}</p>
        </div>
    )
}

export default LanguagePoint
