import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from '../components/ListWrapper/styled'

const Frontend = props => {
  const JavascriptList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage -1 === 1 ? `/` : `/javascript/${currentPage - 1}`
  const nextPage = `/javascript/${currentPage + 1}`
  const imageBanner = "/assets/img/javacript.png"

  return (
    <Layout>
      <SEO 
        title="Frontend"
        description="As melhores dicas e tutoriais para voce se tornar um desenvolvedor frontend"
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

      <Pagination 
        isFirst={isFirst} 
        isLast={isLast} 
        currentPage={currentPage} 
        numPages={numPages} 
        prevPage={prevPage} 
        nextPage={nextPage} 
      />
    </Layout>
  )
}

export const query = graphql`
  query Frontend {
    allMarkdownRemark(
      filter: {frontmatter: {category: {in: ["html", "css", "sass", "js", "react"]}}}, 
      sort: {fields: frontmatter___date, order: DESC},
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

export default Frontend