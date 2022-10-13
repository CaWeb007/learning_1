/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/blog/first',
        destination: '/blog',
        //permanent: true//308 Permanent redirect
        permanent: false//307 Temporary redirect
      },
      {
        source: '/articles',
        destination: '/news',
        permanent: true
      },
      {
        source: '/articles/:category/:newsId',
        destination: '/news/:category/:newsId',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
