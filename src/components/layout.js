import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blog</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} Deepanshu Dhruw · Built with Gatsby,
          hosted on GitHub Pages
        </span>
        <span className="social">
          <a href="https://github.com/devblin" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/devblin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/devblinx" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href="/rss.xml">RSS</a>
        </span>
      </footer>
    </div>
  )
}

export default Layout
