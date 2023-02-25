import { useState, useEffect } from "react";

import axios from "axios";
import { GetStaticProps } from "next";

import Link from "next/link";

import MainLayout from "../../components/layout/MainLayout";
import Category from "../../components/ui/Blog/Category";

import { dateFormatter } from "../../helpers/dateFormatter";

import { EntriesType } from "../../types/EntriesTypes";
import { getIndexCategory } from "../../helpers/getIndexCategory";

const Blog = ({ posts, categories }: EntriesType) => {
    const [categoryNumber, setCategoryNumber] = useState([]);

    useEffect(() => {
        posts.map((val: any) => {
            setCategoryNumber((oldArray) => [...oldArray, val.categories.category] as any);
        });
    }, [posts]);

    return (
        <MainLayout
            pageName="Blog"
            pageDescription="Welcome to my blog! I am Ivan Campos Wainer, a fullstack developer; I like to write down the knowledge I acquire and share it with the community. If you feel part of it, I invite you to read my latest posts, I'm sure they will be useful to you!"
            post={false}
        >
            <div className="px-6 lg:px-20 pt-6 lg:pt-10 pb-8 min-h-screen dark:bg-gray-700">
                <h1 className="dark:text-gray-300 text-gray-600 font-bold text-4xl">✍️ Writes</h1>

                <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row gap-16 lg:gap-0 w-full justify-between">
                    <div className="w-full lg:w-4/6 px-8 lg:px-10">
                        <div className="border-b pb-2 border-gray-500">
                            <p className="font-bold text-emerald-600 text-4xl">Last posts</p>
                        </div>
                        <div className="mt-8 flex flex-col gap-4">
                            {posts.map((value) => (
                                <div className="" key={value?.titlePost}>
                                    <Link href={`/blog/${value?.slugPost}`} className="flex flex-col sm:flex-row justify-between hover:underline decoration-gray-700 dark:decoration-white">
                                        <p className="font-bold dark:text-gray-400 text-gray-500 text-lg">{value?.titlePost}</p>
                                        <p className="text-emerald-400 text-sm">{dateFormatter(value?.publishDate?.toString()).slice(0, 6)}</p>
                                    </Link>
                                    <p className="text-sm dark:text-gray-500 text-gray-700">{value?.descriptionPost}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col min-h-[50vh] w-full lg:w-1/4 p-6 gap-8 rounded-lg bg-[#f1f1f1] border-2 dark:border-[#3b4555] dark:bg-[#2f3846]">
                        <p className="font-bold tracking-[1px] text-sm">CATEGORIES</p>
                        <div className="flex flex-col gap-1 capitalize">
                            {categories.map((val) => (
                                <Category key={val.category} name={val.category} number={getIndexCategory(categoryNumber, val.category)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
    const {
        data: { result: posts },
    } = await axios(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'posts']{categories, authorPost, publishDate, tags, slugPost, titlePost, keywords, descriptionPost, categories->{category}}`);

    const {
        data: { result: categories },
    } = await axios(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'categories']{category}`);

    return {
        props: {
            posts,
            categories,
        },
    };
};
