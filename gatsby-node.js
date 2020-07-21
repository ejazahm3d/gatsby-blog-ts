/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    response.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}`,
            component: path.resolve("./src/templates/blog-post.tsx"),
            context: {
                slug: edge.node.slug,
            },
        })
    })
}
