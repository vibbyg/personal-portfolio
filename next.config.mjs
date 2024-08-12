/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'media.licdn.com',
      port: '',
      pathname: '/dms/image/**',
    },
    {
      protocol: 'https',
      hostname: 'd112y698adiu2z.cloudfront.net',
      port: '',
      pathname: '/photos/production/software_photos/**'
    }
  ],
  },
};

export default nextConfig;
