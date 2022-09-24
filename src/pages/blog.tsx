import MainLayout from "../components/layout/MainLayout"
import getBlog from "../helpers/getBlog"

type attributes  = {
    title: string;
    description: string;
    content: string;
}

interface postsProps {
    id: number;
    attributes: attributes;
}

interface blogProps {
    posts: postsProps[]
}

const blog = ({ posts }: blogProps) => {

    return (
        <MainLayout pageName="Blog">
            <div className="pt-6 lg:pt-6 pb-8 min-h-screen bg-gray-700">
                {posts.map(value => (
                    <>
                        <p>{value.id}</p>
                        <p>{value.attributes.title}</p>
                        <p>{value.attributes.title}</p>
                    </>
                ))}
            </div>
        </MainLayout>
    )
}

export default blog

export const getServerSideProps = async () => {

    const { data: { data } } = await getBlog('posts')

    return {
        props: {
            posts: data
        }
    }
}
