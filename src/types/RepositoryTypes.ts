type LanguageTypeData = "JavaScript" | "PHP" | "CSS" | "HTML" | "TypeScript"

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