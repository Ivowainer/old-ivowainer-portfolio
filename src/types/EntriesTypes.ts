export interface getEntriesType {
    result: Entry[];
}

export interface EntriesType {
    posts: Entry[];
    categories: Category[];
    post: Entry;
}

export interface Category {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    category: string;
}

export interface Entry {
    publishDate: Date;
    authorPost: string;
    categories: Categories;
    content: Content[];
    descriptionPost: string;
    keywords: string;
    slugPost: string;
    tags: string[];
    titlePost: string;
}

export interface Categories {
    category: string;
}

export interface Content {
    _key: string;
    _type: ContentType;
    children: Child[];
    markDefs: MarkDef[];
    style: Style;
    level?: number;
    listItem?: ListItem;
}

export enum ContentType {
    Block = "block",
}

export interface Child {
    _key: string;
    _type: ChildType;
    marks: string[];
    text: string;
}

export enum ChildType {
    Span = "span",
}

export enum ListItem {
    Bullet = "bullet",
    Number = "number",
}

export interface MarkDef {
    _key: string;
    _type: MarkDefType;
    url?: string;
    href?: string;
}

export enum MarkDefType {
    Link = "link",
}

export enum Style {
    H1 = "h1",
    H2 = "h2",
    Normal = "normal",
}
