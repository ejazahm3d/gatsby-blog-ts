import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img, { FluidObject } from "gatsby-image"

import { AllBlogsQuery, ContentfulBlogPost } from "../../graphql-types"
import BlogItem from "../components/blocks/blogs/BlogItem"

const blogDataQuery = graphql`
    query allBlogs {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
            edges {
                node {
                    title
                    id
                    slug
                    publishedDate(formatString: "Do MMMM, YYYY")
                    featuredImage {
                        fluid(maxWidth: 750) {
                            ...GatsbyContentfulFluid
                        }
                    }
                    excerpt {
                        childMarkdownRemark {
                            excerpt(pruneLength: 150)
                        }
                    }
                }
            }
        }
    }
`

const Blog = () => {
    const data = useStaticQuery<AllBlogsQuery>(blogDataQuery)
    return (
        <Layout>
            <SEO title="Blog" />
            <section className="hero is-medium is-success">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Latest Blogs</h1>
                        <h2 className="subtitle">
                            “Think before you speak. Read before you think.” –
                            Fran Lebowitz
                        </h2>
                    </div>
                </div>
            </section>
            <section className="container px-6 my-6 ">
                {data.allContentfulBlogPost.edges.map(edge => {
                    return (
                        <section className="mx-6 my-6" key={edge.node.id}>
                            <BlogItem item={edge.node as ContentfulBlogPost} />
                        </section>
                    )
                })}
            </section>
        </Layout>
    )
}

export default Blog
