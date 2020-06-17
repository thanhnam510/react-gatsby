/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// import globImporter from 'node-sass-glob-importer';
const globImporter = require('node-sass-glob-importer');
const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        importer: globImporter(),
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,

      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-resolve-src',
  ],
};
