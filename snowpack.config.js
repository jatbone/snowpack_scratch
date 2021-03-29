/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist',
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    // "@snowpack/plugin-svelte",
    '@snowpack/plugin-sass',
    '@snowpack/plugin-postcss',
  ],
  packageOptions: {
    // source: 'remote',
    // types: true,
  },
  devOptions: {
    open: 'none',
  },
  // alias: {
  //   components: "./src/components",
  //   pages: "./src/pages",
  // },
}
