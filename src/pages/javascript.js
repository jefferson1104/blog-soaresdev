import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
// import Pagination from "../components/Pagination"

import * as S from '../components/ListWrapper/styled'

const Javascript = props => {
  const JavascriptList = props.data.allMarkdownRemark.edges

  // const { currentPage, numPages } = props.pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage -1 === 1 ? `/` : `/javascript/${currentPage - 1}`
  // const nextPage = `/javascript/${currentPage + 1}`
  const imageBanner = "/assets/img/javacript.png"

  return (
    <Layout>
      <SEO 
        title="Javascript"
        description="Aprenda javascript com muitas dicas, guias e contúdos praticos."
        image={imageBanner}
      />
      <S.ListWrapper>
        {JavascriptList.map(
          ({
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={slug}
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>

      {/* <Pagination 
        isFirst={isFirst} 
        isLast={isLast} 
        currentPage={currentPage} 
        numPages={numPages} 
        prevPage={prevPage} 
        nextPage={nextPage} 
      />*/}
    </Layout>
  )
}

export const query = graphql`
  query jsCategory {
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: "js"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default Javascript