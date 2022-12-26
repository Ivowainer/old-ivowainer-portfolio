/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ["cdn.jsdelivr.net", "cdn.sanity.io"],
    },
};

module.exports = nextConfig;
