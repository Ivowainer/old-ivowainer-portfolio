import { useState, useEffect } from "react";

import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

import Link from "next/link";

import MainLayout from "../../../components/layout/MainLayout";
import Category from "../../../components/ui/Blog/Category";

import { dateFormatter } from "../../../helpers/dateFormatter";

import { EntriesType } from "../../../types/EntriesTypes";
import { getIndexCategory } from "../../../helpers/getIndexCategory";

const PageCategory = ({ posts, categories }: EntriesType) => {
    const [categoryNumber, setCategoryNumber] = useState([]);

    useEffect(() => {
        posts.map((val: any) => {
            setCategoryNumber((oldArray) => [...oldArray, val.categories.category] as any);
        });
    }, [posts]);

    return (
        <MainLayout pageName="Blog" pageDescription="Look the last post from IvoWainer Portfolio!" post={false}>
            <div className="px-6 lg:px-20 pt-6 lg:pt-10 pb-8 min-h-screen dark:bg-gray-700">
                <p className="dark:text-gray-300 text-gray-600 font-bold text-4xl">✍️ Writes</p>

                <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row gap-16 lg:gap-0 w-full justify-between">
                    <div className="w-full lg:w-4/6 px-8 lg:px-10">
                        <div className="border-b pb-2 border-gray-500">
                            <p className="font-bold text-emerald-600 text-4xl capitalize">{posts[0].categories.category}</p>
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

                    <div className="flex flex-col w-full lg:w-1/4 p-6 gap-8 rounded-lg bg-[#f1f1f1] border-2 dark:border-[#3b4555] dark:bg-[#2f3846]">
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

export default PageCategory;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const {
        data: { result },
    } = await axios.get(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'categories']{category}`);

    const category: string[] = result.map((val: any) => val.category);

    return {
        paths: category.map((category) => ({
            params: { category: category.toString() },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { category } = params as { category: string };

    const {
        data: { result: posts },
    } = await axios(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'posts']{categories, authorPost, publishDate, tags, slugPost, titlePost, keywords, descriptionPost, categories->{category}}`);

    const postCategoryFilter = posts.filter((val: any) => val.categories.category.toString().toLowerCase() == category.toString().toLowerCase());

    const {
        data: { result: categories },
    } = await axios(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'categories']{category}`);

    return {
        props: {
            posts: postCategoryFilter,
            categories,
        },
    };
};
