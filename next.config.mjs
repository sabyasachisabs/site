/** @type {import('next').NextConfig} */
// compute GitHub Pages settings based on repository name
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'site';
const isProd = process.env.NODE_ENV === 'production';

const basePath = isProd ? `/${repoName}` : '';
const assetPrefix = isProd ? `/${repoName}/` : '';

// debug logs so we can verify during build/export
console.log('next.config basePath', basePath, 'assetPrefix', assetPrefix, 'isProd', isProd);

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // required for static export which GitHub Pages serves
  output: 'export',
  // serve from the repository name
  basePath,
  assetPrefix,
  // ensure trailing slash so that paths match GitHub Pages expectations
  trailingSlash: true,
};

export default nextConfig
