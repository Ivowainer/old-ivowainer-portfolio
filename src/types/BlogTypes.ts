export type attributes  = {
    title: string;
    description: string;
    content: string[];
    slug: string;
}

/* export interface postsProps {
    posts: attributes
} */

export interface blogProps {
    posts: attributes[]
}

export interface blogPropsUnique {
    post: attributes
} 