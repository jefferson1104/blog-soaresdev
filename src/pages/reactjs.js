import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
// import Pagination from "../components/Pagination"

import * as S from '../components/ListWrapper/styled'

const Reactjs = props => {
  const JavascriptList = props.data.allMarkdownRemark.edges

  // const { currentPage, numPages } = props.pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage -1 === 1 ? `/` : `/javascript/${currentPage - 1}`
  // const nextPage = `/javascript/${currentPage + 1}`
  const imageBanner = "/assets/img/reactjs.jpg"

  return (
    <Layout>
      <SEO 
        title="ReactJS"
        description="Construa interfaces dinamicas para suas aplicações com ReactJS"
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
  query reactjsCategory {
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: "react"}}}
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

export default Reactjs