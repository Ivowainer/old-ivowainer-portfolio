import { GetStaticProps } from "next"
import MainLayout from "../components/layout/MainLayout"
import Test from "../components/Test"

import { Octokit } from '@octokit/core'

const projects = () => {

  

  return (
    <MainLayout pageName="Projects">
      <div className="text-center">
        <Test />
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const nameRepositories = ['Countries-next', 'Pokemon-static', 'ManageWainer_mern', 'Vet-react', 'Expenses-control', 'Wainer-todo']

  const octokit = new Octokit

  const res = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: "ivowainer",
    repo: "ivowainer-portfolio",
  })


  return {
    props: {

    }
  }
}

export default projects