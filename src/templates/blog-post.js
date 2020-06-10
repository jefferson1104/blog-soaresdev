import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogPost = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query Post($slug: String) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  const post = markdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html }}></div>
    </>
  )
}


export default BlogPost