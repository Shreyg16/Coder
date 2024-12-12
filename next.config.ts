import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
module.exports = {
  images: {
    domains: ['images.unsplash.com','another-domain.com','www.piclumen.com','piclumen.com',"coderpad.io"],
  },
};

export default nextConfig;
