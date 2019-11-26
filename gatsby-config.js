/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        deliveryClientConfig: { // Configuration object
          projectId: `9241a30f-e95d-0163-b40e-a58d7b856e12`,  // `65dafdc3-095a-00f6-76bb-3195d433e992`,
          typeResolvers: []
        },
        languageCodenames: [ // example configuration
          `default`, // default language
        ]
      }
    }
  ]
}