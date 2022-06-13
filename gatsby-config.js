require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `testGA4`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTAG,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {

    //     trackingIds: [
    //       process.env.GA4,
    //     ],

    //     gtagConfig: {
    //       optimize_id: process.env.GTAG,
    //       anonymize_ip: true,
    //     },

    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
