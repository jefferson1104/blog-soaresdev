import React from "react"
import { graphql } from "gatsby"
import propTypes from "prop-types"
import ReactGA from 'react-ga'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from '../components/ListWrapper/styled'

const frontendClickTrack = frontend => {
  ReactGA.event({
    category: 'frontend',
    action: 'click',
    label: `Link frontend - ${frontend}`
  })
}

const Frontend = props => {
  const frontendList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage -1 === 1 ? `/` : `/frontend/${currentPage - 1}`
  const nextPage = `/frontend/${currentPage + 1}`

  return (
    <Layout>
      <SEO
        title="Frontend"
        description="Com o conteúdo do blog soaresdev você obtem mais conhecimento para se tornar um melhor desenvolvedor front-end, acesse e veja dicas, tutoriais e guias rápidos das melhores techs do mercado."
      />
      <S.ListWrapper>
        {frontendList.map(
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
              onClick={() => frontendClickTrack(title)}
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
  query FrontendList($skip: Int, $limit: Int) {
    allMarkdownRemark(
      filter: {frontmatter: {category: {in: ["front", "html", "css", "sass", "js", "react"]}}},
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

Frontend.propTypes = {
  isFirst: propTypes.bool,
  isLast: propTypes.bool,
  currentPage: propTypes.number,
  numPages: propTypes.number,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Frontend
