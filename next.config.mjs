/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
        port: "",
        pathname:
          "/pngimages/241/697/png-clipart-netflix-full-logo-tech-companies-thumbnail.png/**",
      },
      {
        protocol: "https",
        hostname: "www.oliveiraecarvalho.com",
        port: "",
        pathname: "/wp-content/uploads/2021/11/opoyi_CUFE1Cvcx-1024x576.jpg/**",
      },
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
        port: "",
        pathname:
          "/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg/**",
      },
    ],
  },
};

export default nextConfig;
