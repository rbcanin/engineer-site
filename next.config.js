/** @type {import('next').NextConfig} */
import('next').NextConfig

module.exports = async () => {
  return {
    reactStrictMode: true,
    env: {
      api: process.env.api,
      painel: process.env.painel,
    },
    trailingSlash: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
        {
          protocol: 'http',
          hostname: '**',
        },
      ],
    },
    reactStrictMode: false,
    transpilePackages: ["core"],
    compiler: {
      styledComponents: true,
    },
  }
}
