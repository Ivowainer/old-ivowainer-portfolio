import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

import axios from "axios";

import { EntriesType, getEntriesType } from "../../types/EntriesTypes";

import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import BlogLayout from "../../components/layout/BlogLayout";
import Link from "next/link";
import Code from "../../components/ui/CodeLanguage";

const urlFor = (source: any) => imageUrlBuilder({ projectId: "54bhdq86", dataset: "production" }).image(source);

const serializer = {
    types: {
        image: (props: any) => (
            <figure>
                <Image className="bg-red-500 w-full" width={500} height={500} src={urlFor(props.node.asset).url()} alt={props.node.alt} />
                <figcaption>{props.node.caption}</figcaption>
            </figure>
        ),
        break: (props: any) => <hr />,
        code: ({ node = {} }: any) => {
            const { code, language } = node;
            return <Code language={language} code={code} />;
        },
    },
    marks: {
        link: (props: any) => (
            <Link href={props?.mark?.url} target="_blank">
                {props?.children}
            </Link>
        ),
        remarkLikeCode: (props: any) => <code className="py-[5px] px-[7px] bg-[#dfe2e6] dark:bg-[#33373a]">{props.children}</code>,
        highlight: (props: any) => <p style={{ backgroundColor: "yellow" }}>{props.children}</p>,
    },
};

const NamePost = ({ post }: EntriesType) => {
    return (
        <BlogLayout keyWords={post.keywords} pageName={`Blog`} blogName={post?.titlePost} pageDescription={`${post?.descriptionPost}`} post={true}>
            <div className="text-sm px-6 lg:px-20 py-10 flex flex-col gap-3">
                <div className="prose dark:prose-hr:border-white prose-hr:border-gray-600 prose-headings:text-gray-600 dark:prose-headings:text-gray-100 dark:prose-invert font-normal lg:prose-md">
                    <PortableText blocks={post?.content} serializers={serializer} />
                </div>
            </div>
        </BlogLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const {
        data: { result },
    } = await axios.get<getEntriesType>(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'posts']{categories, authorPost, _createdAt, tags, slugPost, titlePost, keywords, descriptionPost, content}`);

    const postSlug: string[] = result.map((val) => val.slugPost);

    return {
        paths: postSlug.map((name) => ({
            params: { name: name.toString() },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };

    const {
        data: { result },
    } = await axios(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[slugPost == "${name}"]{categories, authorPost, _createdAt, tags, slugPost, titlePost, keywords, descriptionPost, content}`);

    return {
        props: {
            post: result[0],
        },
    };
};

export default NamePost;
