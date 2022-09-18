
interface LanguagePointProps {
    language: Language;
    color: string;
}

type Language = 'Javascript' | 'Typescript' | 'Prisma' | 'Mongoose' | 'MongoDB' | 'React' | 'Typescript' | 'NextJS' | 'PHP' | 'MySQL' | 'CSS'

const LanguagePoint = ({ color, language }: LanguagePointProps) => {

    return (
        <div className="flex items-center gap-2">
            <div className={`bg-${color} w-2 h-2 rounded-full`}></div>
            <p>{language}</p>
        </div>
    )
}

export default LanguagePoint
