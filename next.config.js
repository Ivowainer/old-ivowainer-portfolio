/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["cdn.jsdelivr.net", "cdn.sanity.io"],
    },
};

module.exports = nextConfig;
