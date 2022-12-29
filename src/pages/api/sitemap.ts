import axios from "axios";

import type { NextApiRequest, NextApiResponse } from "next";

import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        data: { result: posts },
    } = await axios(`${process.env.NEXT_PUBLIC_BLOG_ENTRIES}[_type == 'posts']{slugPost}`);

    // An array with your links
    const links = posts.map((val: any) => ({ url: `/blog/${val.slugPost}`, changefreq: "daily", priority: 0.3 }));

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

    res.end(xmlString);
}
