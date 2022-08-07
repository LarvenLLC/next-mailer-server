/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      constants: false,
      process: require.resolve('process/browser'),
      tls: false,
      net: false,
      dns: false,
      child_process: false,
      // zlib: require.resolve('browserify-zlib'),
      // stream: require.resolve('stream-browserify'),
      // util: require.resolve('util'),
      // buffer: require.resolve('buffer'),
      // asset: require.resolve('assert'),
      // crypto: require.resolve('crypto-browserify'),
      // os: require.resolve('os-browserify/browser'),
    };
    // config.node = {
    //   net: 'empty'
    // };

    return config;
  },
}

module.exports = nextConfig
