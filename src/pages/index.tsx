import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props: PageProps) => (
    <Layout>
        <SEO title="Home" />
        <div className="container">
            <div className="columns">
                <div className="column">
                    <h2 className="title is-2">Level 2 heading</h2>
                    <p className="content">Cool content. Using Bulma!</p>
                </div>
                <div className="column is-four-fifths">
                    <h2 className="title is-2">Level 2 heading</h2>
                    <p className="content">This column is cool too!</p>
                </div>
            </div>
        </div>
        <Link to="/blog/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
)

export default IndexPage
