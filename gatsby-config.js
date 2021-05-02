const config = require('./site-config')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const plugins = [
  `gatsby-alias-imports`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: 'gatsby-omni-font-loader',
    preconnect: ['https://fonts.gstatic.com'],
    options: {
      web: [
        {
          name: 'Work Sans',
          file:
            'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap'
        }
      ]
    }
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: false
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    }
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: `${__dirname}/src/svg`
      }
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: config.siteMetadata.title,
      short_name: config.siteMetadata.title,
      start_url: `/`,
      background_color: config.siteMetadata.backgroundColor,
      theme_color: config.siteMetadata.backgroundColor,
      display: `minimal-ui`,
      icon: config.siteMetadata.icon,
      icon_options: {
        purpose: `any maskable`
      }
    }
  }
  // `gatsby-plugin-gatsby-cloud`
  // `gatsby-plugin-offline`,
]

module.exports = {
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    author: config.siteMetadata.author,
    cover: config.siteMetadata.cover,
    url: config.siteMetadata.url
  },
  plugins
}
