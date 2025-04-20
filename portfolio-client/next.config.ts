import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        port: "",
        pathname: "/i/u/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
