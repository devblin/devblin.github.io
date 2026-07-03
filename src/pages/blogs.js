import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Blog</h1>
      <p className="subtitle">
        Notes on building software, tools, and the occasional idea worth writing
        down.
      </p>

      {posts.length === 0 ? (
        <p>No posts yet — check back soon.</p>
      ) : (
        <ol className="post-list" style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <li key={post.fields.slug} className="post-list-item">
                <article itemScope itemType="http://schema.org/Article">
                  <Link className="post-title" to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                  <div className="post-meta">
                    {post.frontmatter.date} · {post.timeToRead} min read
                  </div>
                  <p
                    className="post-excerpt"
                    itemProp="description"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                  />
                </article>
              </li>
            )
          })}
        </ol>
      )}
    </Layout>
  )
}

export default BlogsPage

export const Head = () => <Seo title="Blog" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
