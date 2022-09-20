import { Language } from '../types/RepositoryTypes';


export interface ProjectsInterface {
    name: string;
    link: string;
    github: string;
    description: string;
    languages: Language[];
}

export const projects: ProjectsInterface[] = [
    {
        name: 'ManageWainer_mern',
        link: 'https://wainermanager.netlify.app/',
        github: 'https://github.com/Ivowainer/ManageWainer_mern',
        description: 'ProjectManager Wainer with Stack MERN 😊 PLEASE READ README',
        languages: ['Express', 'MongoDB', 'React', 'Tailwind', 'JWT', 'Socket.IO']
    }
]