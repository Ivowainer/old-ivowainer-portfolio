type LanguageTypeData = "JavaScript" | "PHP" | "CSS" | "HTML" | "TypeScript" | "NextJS" | "MySQL" | "Express" | "MongoDB" | "React"

export type LanguagesType = {
    status: number;
    url: string;
    headers: [];
    data: LanguageTypeData;
}

export interface RepositoriyType {
    name: string;
    languages: LanguagesType;  
    description: string;
}

export interface RepositoryProps {
    name: string;
    languages: LanguageTypeData[];

}