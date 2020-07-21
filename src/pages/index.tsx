import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/blocks/Hero"

const IndexPage = (props: PageProps) => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <div className="container mt-4">
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
        <Link to="/blog/">Go to Blog</Link> <br />
    </Layout>
)

export default IndexPage
