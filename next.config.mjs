const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"], // Allow images from fakestoreapi.com
  },
  reactStrictMode: true, // Enables React Strict Mode (helpful for development)
  experimental: {
    appDir: true, // Enables the App Router in Next.js
  },
};

export default nextConfig;
