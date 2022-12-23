import Head from "next/head";
import { PagesNames } from "../../helpers/Pages";
import NavBar from "../ui/NavBar";

interface BlogLayoutProps {
    pageName: string;
    children: React.ReactNode;
    blogName: string;
    post: boolean;
    pageDescription: string;
    keyWords: string;
}

const BlogLayout = ({ children, pageName, post, pageDescription, blogName, keyWords }: BlogLayoutProps) => {
    return (
        <>
            <Head>
                <title>{`${pageName} | ${blogName}`}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta name="author" content="Ivan Campos Wainer" />
                <meta name="description" content={`About the post ${pageDescription}`} />
                <meta name="copyright" content="Ivan Campos Wainer" />
                <meta name="keywords" content={`${pageName}, ${keyWords}`} />

                <meta name="robots" content="index" />

                <meta property="og:title" content={`Look the post of Ivan Campos Wainer: "${blogName}"`} />
                <meta property="og:description" content={`${pageDescription}`} />
                <meta property="og:image" content={`/blogLogo.png`} />

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

export default BlogLayout;
