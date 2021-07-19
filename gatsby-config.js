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
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        // "G-TBV11DBL1Q", // Google Analytics / GA
      ],
    },
  },
  ],
};
