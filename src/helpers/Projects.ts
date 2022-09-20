import { Language } from '../types/RepositoryTypes';


export interface ProjectsInterface {
    name: string;
    link: string;
    github: string;
    description: string;
    languages: Language[];
}

export const PROJECTS: ProjectsInterface[] = [
    {
        name: 'ManageWainer',
        link: 'https://wainermanager.netlify.app/',
        github: 'https://github.com/Ivowainer/ManageWainer_mern',
        description: "It's a ProjectManager to keep your projects organized; you can register by a real gmail and add a real collaborators who can complete the task",
        languages: ['Express', 'MongoDB', 'React', 'Tailwind', 'JWT', 'Socket.IO']
    },
    {
        name: 'WainerTodo',
        link: 'http://wainer-todo.onlinewebshop.net/index.php',
        github: 'https://github.com/Ivowainer/Wainer-todo',
        description: "Wainer TODO 😊 This is one of my first projects with sessions and login system in PHP and MySQL. It's a basic to-do list with sessions for your everyday routine",
        languages: ['NextJS', 'Tailwind', 'Typescript', 'React']
    },
    {
        name: 'Countries Practice DevChallenge',
        link: 'http://countries-next-pink.vercel.app/',
        github: 'https://github.com/Ivowainer/Countries-next',
        description: "The DevChallenge practice is done. The final result is exactly like the presentation. The most important part of the page is the velocity",
        languages: ['PHP', 'MySQL', 'Tailwind']
    },

    {
        name: 'ExpensesControl',
        link: 'https://expensescw-app-react.netlify.app/',
        github: 'https://github.com/Ivowainer/Expenses-control',
        description: "Expenses Control App React 💸; A beautiful Expenses Control, with tracking in percentage and graph, this works with LocalStorage and means that the information is saved.",
        languages: ['React', 'CSS']
    },
    {
        name: 'PokemonSave',
        link: 'https://next-pokemon-static-ivowainer.vercel.app/',
        github: 'https://github.com/Ivowainer/Pokemon-static',
        description: "It's a simple Pokemon practice with Next and TS. It made with staticProps",
        languages: ['NextJS', 'React', 'NextUI', 'Typescript']
    },
    {
        name: 'VetFollow',
        link: 'https://fancy-churros-9d04af.netlify.app/',
        github: 'https://github.com/Ivowainer/Vet-react',
        description: "Simple CRUD created with React, it's a basic patient follow-up",
        languages: ['React', 'Tailwind']
    }
]