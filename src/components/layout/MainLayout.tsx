import Head from "next/head";
import { PagesNames } from "../../helpers/Pages";
import NavBar from "../ui/NavBar";

interface MainLayoutProps {
    pageName: string;
    children: React.ReactNode;
    post: boolean;
    pageDescription: string;
}

const MainLayout = ({ children, pageName, post, pageDescription }: MainLayoutProps) => {
    return (
        <>
            <Head>
                <title>{`${pageName} | Ivan Campos Wainer`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta name="author" content="Ivan Campos Wainer" />
                <meta name="description" content={`${pageDescription}`} />
                <meta name="copyright" content="Ivan Campos Wainer" />
                <meta name="image" content="https://www.ivancamposwainer.com/mainLogo.png" />
                <meta name="url" content="https://www.ivancamposwainer.com" />
                <meta name="keywords" content={`${pageName}, programación, technologies, portfolio, how, build, nextjs, react`} />

                <meta name="google-site-verification" content="osdxF6ciMVEp_Q0vYKwuLttS8Kpya99v3_UOVa6oIys" />

                <meta property="og:title" content={`${pageName} | Ivan Campos Wainer`} />
                <meta property="og:description" content={`${pageDescription}`} />
                <meta property="og:image" content={`https://www.ivancamposwainer.com/mainLogo.png`} />
                <meta property="og:url" content={`https://www.ivancamposwainer.com`} />
                <meta property="og:type" content="article" />

                <meta property="fb:app_id" content="710360040603207" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Ivan Campos Wainer" />
                <meta name="twitter:description" content="Ivan Campos Wainer is a Fullstack Web Developer who specializes in building exceptional digital experiences. Welcome to my digital garden." />
                <meta name="twitter:image" content={`https://www.ivancamposwainer.com/mainLogo.png`} />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>

            <div className="flex flex-col  lg:flex-row dark:bg-gray-700">
                <aside className="z-20 lg:h-screen dark:bg-gray-800 bg-gray-100 lg:bg-white sticky top-0 dark:border-gray-600 lg:border-r-2">
                    <NavBar pageName={pageName} />
                </aside>

                <main className="w-full">{children}</main>
            </div>
        </>
    );
};

export default MainLayout;
