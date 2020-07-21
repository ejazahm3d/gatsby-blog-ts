import React from "react"
import Layout from "../components/layout"
import { graphql, Link, PageProps } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "../components/seo"
import Img, { FluidObject } from "gatsby-image"
import { ContentfulBlogPost } from "../../graphql-types"

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

interface Props extends PageProps<{ contentfulBlogPost: ContentfulBlogPost }> {}

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
            <Link to="/blog/">Visit the Blog Page</Link>
            <div className="content">
                <h1>{data.contentfulBlogPost.title}</h1>
                <span className="meta">
                    Posted on {data.contentfulBlogPost.publishedDate}
                </span>
                {data.contentfulBlogPost.featuredImage && (
                    <Img
                        className="featured"
                        fluid={
                            data.contentfulBlogPost.featuredImage
                                .fluid as FluidObject
                        }
                        alt={data.contentfulBlogPost.title!!}
                    />
                )}
                {documentToReactComponents(
                    data.contentfulBlogPost.body!!.json,
                    options
                )}
            </div>
        </Layout>
    )
}

export default BlogPost
