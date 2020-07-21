import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/blocks/Hero"
import TopFiveBlogs from "../components/blocks/blogs"

const IndexPage = (props: PageProps) => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <div className="container mt-4 mb-6">
            <TopFiveBlogs />
        </div>
    </Layout>
)

export default IndexPage
