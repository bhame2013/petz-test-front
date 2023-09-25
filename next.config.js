/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    POKE_API_URL: process.env.POKE_API_URL,
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
