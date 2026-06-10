const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    // When exporting a static site, Next's image optimizer isn't available.
    // Setting `unoptimized: true` makes <Image /> render plain <img> tags
    // pointing to files in /public so they appear in the exported `out/`.
    unoptimized: true,
  },
}

export default nextConfig
