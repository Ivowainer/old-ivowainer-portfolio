export interface getEntriesType {
    result: Entry[];
}

export interface EntriesType {
    posts: Entry[];
    post: Entry;
}

export interface Entry {
    _createdAt: Date;
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
    _ref: string;
    _type: string;
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
