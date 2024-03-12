/** @type {import('next').NextConfig} */
const nextConfig = {
  
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'e7.pngegg.com',
              port: '',
              pathname: '/pngimages/241/697/png-clipart-netflix-full-logo-tech-companies-thumbnail.png/**',
            },
          ],
        },
      
};

export default nextConfig;
