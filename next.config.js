/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {domains: ['cloudinary.com', 'res.cloudinary.com']}
}

module.exports = nextConfig

  
