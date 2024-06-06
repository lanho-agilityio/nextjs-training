/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        loader: 'custom',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
              },
              {
                protocol: 'http',
                hostname: '**',
              },
        
        ],
      },
};

export default nextConfig;
