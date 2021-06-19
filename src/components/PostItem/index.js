import React from "react"
import propTypes from "prop-types"

import getThemeColor from '../../utils/getThemeColor'
import * as S from "./styled"

const PostItem = ({ slug, background, category, date, timeToRead, title, description, }) => (
  <S.PostItemLink 
    to={slug}
    cover 
    direction="right" 
    bg={getThemeColor()} 
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: propTypes.string.isRequired,
  background: propTypes.string,
  category: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  timeToRead: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

export default PostItem