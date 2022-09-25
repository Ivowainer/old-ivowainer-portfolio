export type attributes  = {
    Title: string;
    description: string;
    content: string;
}

export interface postsProps {
    id: number;
    attributes: attributes;
}

export interface blogProps {
    posts: postsProps[]
}

export interface blogPropsUnique {
    post: postsProps
} 