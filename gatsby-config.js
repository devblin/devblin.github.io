/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // NOTE: This is a user site on a custom domain (www.devblin.in) served at the
  // root, so there is NO pathPrefix. Do not add one, or navigation will break.
  siteMetadata: {
    title: `Deepanshu Dhruw`,
    author: {
      name: `Deepanshu Dhruw`,
      summary: `a software engineer who writes about the things he builds.`,
    },
    description: `Deepanshu Dhruw — Software Engineer. Notes on building software, tools, and ideas.`,
    siteUrl: `https://www.devblin.in`,
    social: {
      twitter: `devblinx`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // Math: inline with $...$ and block with $$...$$
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // https://katex.org/docs/options.html
              strict: `ignore`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // NOTE: gatsby-plugin-manifest was removed — it requires a raster icon.
    // The browser-tab favicon is the "D" monogram set in src/components/seo.js.
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Deepanshu Dhruw · RSS Feed",
          },
        ],
      },
    },
  ],
}
