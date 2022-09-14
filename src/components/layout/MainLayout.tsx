import Head from "next/head"
import { PagesNames } from "../../helpers/Pages"
import NavBar from "../ui/NavBar"

interface MainLayoutProps {
  pageName: PagesNames;
  children: React.ReactNode
}

const MainLayout = ({ children, pageName } : MainLayoutProps) => {

  return (
    <>
      <Head>
        <title>{`${pageName} | Ivan Campos Wainer`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>

      <div className='flex '>
        <aside className="h-screen sticky top-0 border-r-2">
          <NavBar pageName={pageName} />
        </aside>
        
        <main className="w-full">
          { children }
        </main>
      </div>
    </>
  )
}

export default MainLayout