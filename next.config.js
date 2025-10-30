/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'anisfarah.engineer', 'www.anisfarah.engineer', 'anisfarah.engineer'],
  },
  output: 'export',
  trailingSlash: true,
  // Uncomment if you need to set a base path (e.g., if deployed in a subdirectory)
  // basePath: '',
};

module.exports = nextConfig; 