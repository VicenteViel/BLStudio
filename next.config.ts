import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    allowedHosts: ['.ngrok-free.app', '.localltunnel.me'],
  },
};

export default nextConfig;