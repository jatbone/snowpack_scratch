/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist',
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-svelte',
  ],
  packageOptions: {
    polyfillNode: true,
    // source: 'remote',
    // types: true,
  },
  devOptions: {
    port: 3000,
    open: 'none',
  },
  alias: {
    // types: './types',
    components: './src/components',
  },
}
