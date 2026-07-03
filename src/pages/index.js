import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <p className="subtitle">Software Engineer</p>

      <p>
        Previously worked at{" "}
        <strong>
          <a href="https://buildship.com" target="_blank" rel="noopener noreferrer">
            Buildship
          </a>
        </strong>
        ,{" "}
        <strong>
          <a href="https://peakflo.co" target="_blank" rel="noopener noreferrer">
            Peakflo (YC W22)
          </a>
        </strong>
        ,{" "}
        <strong>
          <a href="https://hoppscotch.com" target="_blank" rel="noopener noreferrer">
            Hoppscotch
          </a>
        </strong>
        .
      </p>

      <p>
        Also did freelance work at{" "}
        <strong>
          <a href="https://getrima.ai/" target="_blank" rel="noopener noreferrer">
            Rima (YC S22)
          </a>
        </strong>{" "}
        to build evals, and some open-source stuff at{" "}
        <strong>
          <a href="https://www.keephq.dev" target="_blank" rel="noopener noreferrer">
            Keep
          </a>
        </strong>
        ,{" "}
        <strong>
          <a href="https://novu.co" target="_blank" rel="noopener noreferrer">
            Novu
          </a>
        </strong>
        .
      </p>

      <section>
        <div className="section-head">
          <h2>Blog</h2>
          <Link className="view-all" to="/blogs">
            View all →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p>No posts yet — check back soon.</p>
        ) : (
          <ol className="post-list" style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <li key={post.fields.slug} className="post-list-item">
                  <Link className="post-title" to={post.fields.slug}>
                    {title}
                  </Link>
                  <div className="post-meta">
                    {post.frontmatter.date} · {post.timeToRead} min read
                  </div>
                  <p
                    className="post-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                  />
                </li>
              )
            })}
          </ol>
        )}
      </section>
    </Layout>
  )
}

export default HomePage

export const Head = () => <Seo />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 3) {
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
