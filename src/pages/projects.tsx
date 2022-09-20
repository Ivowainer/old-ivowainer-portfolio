import MainLayout from "../components/layout/MainLayout"
import GitCard from "../components/ui/GitCard"

import { RepositoryProps } from "../types/RepositoryTypes"

const Projects = () => {
  
  const nameRepositories: RepositoryProps[] = [
    {
      name: 'Countries-next',
      languages: ['React', 'NextJS', 'React', 'CSS', 'TypeScript']
    }
  ]

  const d = ['Pokemon-static', 'ManageWainer_mern', 'Vet-react', 'Expenses-control', 'Wainer-todo']

  return (
    <MainLayout pageName="Projects">
      <div className="flex flex-col">
        <GitCard />
      </div>
    </MainLayout>
  )
}

export default Projects