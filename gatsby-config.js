/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'ShrapDaily',
    titleTemplate: 'Shrap Daily',
    siteUrl: 'https://shrapdaily.netlify.com',
    description: 'Shrap Daily news & entertainment',
    twitterUsername: '@shrapdaily',
    twitterURL: 'https://twitter.com/shrapdaily',
    author: 'Shrap Daily',
    authorSite: 'https://www.youtube.com/channel/UCm4BLR02Orpm_cLML2Z0mBw'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/exclusive-premiers-posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/interviews-posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/music-reviews-posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shrap Daily',
        short_name: 'Shrap Daily',
        start_url: '/',
        background_color: '#0027EC',
        theme_color: '#0027EC',
        display: 'standalone',
        icon: 'src/assets/favicon-16x16.png'
      }
    },
    'gatsby-plugin-react-helmet',
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'ENTER YOUR GA TRACKING ID HERE',
        head: false
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')]
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        purgeOnly: [ './src', './src/css/tailwind.css' ]
      }
    }
  ]
};
