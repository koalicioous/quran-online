module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "quran-online",
  },
  plugins: [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-fontawesome-css",
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `inter`,
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/surah/*`] },
  },
  `gatsby-transformer-json`,
  ],
};
