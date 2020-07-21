import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ContentfulBlogPost, TopFiveQuery } from "../../../../graphql-types"
import BlogItem from "./BlogItem"

const topFiveBlogs = graphql`
    query topFive {
        allContentfulBlogPost(
            sort: { fields: publishedDate, order: DESC }
            limit: 5
        ) {
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

interface Props {}

const TopFiveBlogs = (props: Props) => {
    const data = useStaticQuery<TopFiveQuery>(topFiveBlogs)
    return (
        <div>
            <h3 className="title is-2 has-text-centered mb-5 mt-6">
                Top 5 Blog Posts
            </h3>

            <section className="columns">
                {data.allContentfulBlogPost.edges.map(item => {
                    return (
                        <BlogItem
                            key={item.node.id}
                            item={item.node as ContentfulBlogPost}
                        />
                    )
                })}
            </section>
        </div>
    )
}

export default TopFiveBlogs
