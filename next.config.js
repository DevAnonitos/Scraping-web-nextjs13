/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        optimizePackageImports: [
            "mongoose", 
            "axios", 
            "nodemailer", 
            "cheerio", 
        ],
        serverComponentsExternalPackages: ['mongoose'],
    },
    images: {
        domains: ['m.media-amazon.com'],
    },
};

module.exports = nextConfig;
