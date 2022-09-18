import { useEffect } from 'react'
import { Octokit } from '@octokit/core'
import GitCard from './ui/GitCard'

const Test = () => {
    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_AUTH_GITHUB
      })
    
      useEffect(() => {
        const getCard = async () => {
          const res = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: "ivowainer",
            repo: "ivowainer-portfolio",
          })

          console.log(res)
        }
        
        getCard()
      }, [])

    return (
        <div className='flex'>
            <GitCard />
        </div>
    )
}

export default Test
