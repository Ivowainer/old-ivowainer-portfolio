import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";

import MainLayout from "../../components/layout/MainLayout";

import { dateFormatter } from "../../helpers/dateFormatter";

import { EntriesType } from "../../types/EntriesTypes";

const blog = ({ posts }: EntriesType) => {
    return (
        <MainLayout pageName="Blog" pageDescription="Look the last post from IvoWainer Portfolio!" post={false}>
            <div className="px-6 lg:px-20 pt-6 lg:pt-10 pb-8 min-h-screen dark:bg-gray-700">
                <p className="dark:text-gray-300 text-gray-600 font-bold text-4xl">✍️ Escritos</p>

                <div className="mt-8 lg:mt-16 w-5/6 lg:w-1/2 px-8 lg:px-10">
                    <div className="border-b pb-2 border-gray-500">
                        <p className="font-bold text-emerald-600 text-4xl">Últimas publicaciones</p>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                        {posts.map((value) => (
                            <div className="" key={value?.titlePost}>
                                <Link href={`/blog/${value?.slugPost}`} className="flex justify-between hover:underline decoration-gray-700 dark:decoration-white">
                                    <p className="font-bold dark:text-gray-400 text-gray-500 text-lg">{value?.titlePost}</p>
                                    <p className="text-emerald-400 text-sm">{dateFormatter(value?.publishDate?.toString()).slice(0, 6)}</p>
                                </Link>
                                <p className="text-sm dark:text-gray-500 text-gray-700">{value?.titlePost}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default blog;

export const getStaticProps: GetStaticProps = async () => {
    const {
        data: { result },
    } = await axios(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'posts']{categories, authorPost, publishDate, tags, slugPost, titlePost, keywords, descriptionPost, content}`);

    return {
        props: {
            posts: result,
        },
    };
};
