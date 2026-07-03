/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// "D" monogram favicon (matches the original hand-built site).
const FAVICON =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='50' font-size='125' font-family='SF Mono, Monaco, Inconsolata, Fira Code, monospace' text-anchor='middle' dominant-baseline='central'>D</text></svg>"

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaTitle = title || defaultTitle
  // Home passes no title -> just "Deepanshu Dhruw"; other pages -> "Title | Deepanshu Dhruw"
  const fullTitle =
    title && defaultTitle && title !== defaultTitle
      ? `${title} | ${defaultTitle}`
      : metaTitle

  return (
    <>
      <title>{fullTitle}</title>
      <link rel="icon" href={FAVICON} />
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
