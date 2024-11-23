/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // SVGR Configuration
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  }
export default nextConfig;
