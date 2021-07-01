import React from  'react'
import propTypes from 'prop-types'
import ReactGA from 'react-ga'

import * as S from './styled'

import getThemeColor from '../../utils/getThemeColor'

const RecommendedClickTrack = () => {
  ReactGA.event({
    category: 'menu link',
    action: 'click',
    label: 'Clicou num recommended link'
  })
}

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to={previous.fields.slug}
        className="previous"
        onClick={() => RecommendedClickTrack()}
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        to={next.fields.slug}
        className="next"
        onClick={() => RecommendedClickTrack()}
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  })
}

export default RecommendedPosts
