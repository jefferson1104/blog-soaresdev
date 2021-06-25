import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from '../components/ListWrapper/styled'

const Frontend = props => {
  const backendList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage -1 === 1 ? `/` : `/backend/${currentPage - 1}`
  const nextPage = `/backend/${currentPage + 1}`
  
  return (
    <Layout>
      <SEO 
        title="Backend"
        description="As melhores dicas e tutoriais para voce se tornar um desenvolvedor backend"
      />
      <S.ListWrapper>
        {backendList.map(
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
  query BackendList($skip: Int, $limit: Int) {
    allMarkdownRemark(
      filter: {frontmatter: {category: {in: ["node", "php", "bd"]}}}, 
      sort: {fields: frontmatter___date, order: DESC},
      limit: $limit,
      skip: $skip
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