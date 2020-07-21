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
                        <strong>Bulma</strong> by{" "}
                        <a href="https://jgthms.com">Jeremy Thomas</a>. The
                        source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">
                            MIT
                        </a>
                        . The website content is licensed{" "}
                        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                            CC BY NC SA 4.0
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
