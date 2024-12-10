/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
