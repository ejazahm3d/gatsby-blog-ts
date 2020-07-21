/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./global.scss"

const Layout: React.FC = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
            </div>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Blog</strong> by{" "}
                        <a
                            href="https://www.ejazahmed.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ejaz Ahmed
                        </a>
                        . The source code is available at{" "}
                        <a
                            href="https://github.com/ejazahm3d/gatsby-blog-ts"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
