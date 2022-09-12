import Head from "next/head"
import { PagesNames } from "../../helpers/Pages"
import NavBar from "../ui/NavBar"

interface MainLayoutProps {
  pageName: PagesNames;
}

const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = ({ children, pageName }) => {
  /* const [page, setPage] = useState<string>('') */

  return (
    <>
      <Head>
        <title>{`${pageName} | Ivan Campos Wainer`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className='flex'>
        <aside className="h-screen sticky top-0">
          <NavBar pageName={pageName} />
        </aside>
        
        <main>
          { children }
        </main>
      </div>
    </>
  )
}

export default MainLayout