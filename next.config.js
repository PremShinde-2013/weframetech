/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['nextui.org'], // Allow external images from nextui.org
        formats: ['image/avif', 'image/webp'], // Enable avif and webp formats for modern image compression
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextui.org',
                port: '', // Leave blank if no specific port is used
                pathname: '/images/**', // Match all paths under /images
            },
        ],
    },
};

module.exports = nextConfig;
