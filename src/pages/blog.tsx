import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img, { FluidObject } from "gatsby-image"

import { AllBlogsQuery } from "../../graphql-types"

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

            <Link to="/">Go back to the homepage</Link>
            <ul>
                {data.allContentfulBlogPost.edges.map(edge => {
                    return (
                        <li className="post" key={edge.node.id}>
                            <h2>
                                <Link to={`/blog/${edge.node.slug}/`}>
                                    {edge.node.title}
                                </Link>
                            </h2>
                            <div className="meta">
                                <span>Posted on {edge.node.publishedDate}</span>
                            </div>
                            {edge.node.featuredImage && (
                                <Img
                                    className="featured"
                                    fluid={
                                        edge?.node?.featuredImage
                                            ?.fluid!! as FluidObject
                                    }
                                    alt={edge?.node?.title!!}
                                />
                            )}
                            <p className="excerpt">
                                {
                                    edge?.node?.excerpt?.childMarkdownRemark
                                        ?.excerpt
                                }
                            </p>
                            <div className="button">
                                <Link to={`/blog/${edge.node.slug}/`}>
                                    Read More
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export default Blog
