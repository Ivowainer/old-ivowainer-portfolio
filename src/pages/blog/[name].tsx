import { GetServerSideProps } from "next";
import MainLayout from "../../components/layout/MainLayout";
import getBlog from "../../helpers/getBlog";
import { blogPropsUnique } from "../../types/BlogTypes";

import Serialize from "../../helpers/Serialize";

const NamePost = ({ post }: blogPropsUnique) => {
    return (
        <MainLayout pageName={`${post.title}`} pageDescription={`${post.description}`} post={true}>
            <div className="text-sm px-6 lg:px-20 py-10 flex flex-col gap-3">
                <h1 className="text-4xl text-gray-700 dark:text-gray-200 font-bold">{post.title}</h1>

                <div className="prose dark:prose-hr:border-white prose-hr:border-gray-600 prose-headings:text-gray-600 dark:prose-headings:text-gray-100 dark:prose-invert font-normal lg:prose-md javascript">
                    <Serialize>{post.content}</Serialize>
                </div>
            </div>
        </MainLayout>
    );
};

export default NamePost;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { name } = params as { name: string };

    const {
        data: { docs },
    } = await getBlog(`posts?where[slug][equals]=${name}`);

    console.log(docs);

    return {
        props: {
            post: docs[0],
        },
    };
};
