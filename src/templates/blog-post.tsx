import React from "react"
import Layout from "../components/layout"
import { graphql, Link, PageProps } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "../components/seo"
import Img, { FluidObject } from "gatsby-image"
import { SingleBlogPostQuery } from "../../graphql-types"

export const blogPost = graphql`
    query singleBlogPost($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "Do MMMM, YYYY")
            featuredImage {
                fluid(maxWidth: 750) {
                    ...GatsbyContentfulFluid
                }
            }
            body {
                json
            }
        }
    }
`

interface Props extends PageProps<SingleBlogPostQuery> {}

const BlogPost: React.FC<Props> = ({ data }) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node: any) => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url
                return <img alt={alt} src={url} />
            },
        },
    }
    return (
        <Layout>
            <SEO title="Blot Post" />

            <div className="hero is-info is-medium">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {data?.contentfulBlogPost?.title}
                        </h1>
                        <h2 className="subtitle">
                            Posted on {data?.contentfulBlogPost?.publishedDate}
                        </h2>
                    </div>
                </div>
            </div>
            <section className="container mx-6 my-6">
                {documentToReactComponents(
                    data?.contentfulBlogPost?.body!!.json,
                    options
                )}
            </section>
        </Layout>
    )
}

export default BlogPost
