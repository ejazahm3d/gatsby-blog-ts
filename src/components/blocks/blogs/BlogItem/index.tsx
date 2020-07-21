import React from "react"
import { ContentfulBlogPost } from "../../../../../graphql-types"
import Img, { FluidObject } from "gatsby-image"

interface Props {
    item: ContentfulBlogPost
}

const BlogItem = (props: Props) => {
    return (
        <div className="card my-4 mx-4 column">
            <div className="card-image">
                <figure className="image ">
                    <Img
                        className="featured"
                        fluid={props.item.featuredImage?.fluid!! as FluidObject}
                        alt={props.item.title!!}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.item.title}</p>
                        <p className="subtitle is-6">@ejazahm3d</p>
                    </div>
                </div>

                <div className="content">
                    {props.item.excerpt?.childMarkdownRemark?.excerpt}
                    <br />
                    <time dateTime={props.item.publishedDate}>
                        {props.item.publishedDate}
                    </time>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
