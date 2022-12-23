import axios from "axios";

const getBlog = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BLOG_ENTRIES,
});

export default getBlog;
