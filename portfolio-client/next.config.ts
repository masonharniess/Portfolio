import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        // or pathname: "**" if you want all paths
        port: "",
        pathname: "/i/u/**",
      },
    ],
  },
};

export default nextConfig;
