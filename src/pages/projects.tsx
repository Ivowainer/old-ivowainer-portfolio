import { GetStaticProps } from "next"
import MainLayout from "../components/layout/MainLayout"

import { Octokit } from '@octokit/core'
import GitCard from "../components/ui/GitCard"

import { RepositoriyType } from "../types/RepositoryTypes"

const Projects = ({ repositories }: { repositories: RepositoriyType[] }) => {

  return (
    <MainLayout pageName="Projects">
      <div className="flex flex-col">
        {repositories.map(value => (
          <GitCard repository={value} key={value.name} />
        ))}
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const nameRepositories = ['Countries-next', 'Pokemon-static', 'ManageWainer_mern', 'Vet-react', 'Expenses-control', 'Wainer-todo']

  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_AUTH_GITHUB
  })

  const data = await Promise.all(
    nameRepositories.map( async (names) => {
        return await octokit.request('GET /repos/{owner}/{repo}', {
          owner: "ivowainer",
          repo: names,
        })
      }
    ),
  )

  const repositories = await Promise.all(
    data.map( async (value) => ({
      name: value.data.name,
      language: await octokit.request(value.data.languages_url),
      description: value.data.description
    }))
  )

  return {
    props: {
      repositories
    }
  }
}

export default Projects