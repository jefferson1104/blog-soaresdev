import styled from 'styled-components'
import media from 'styled-media-query'
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  height: 10rem;
  width: 12.28rem;
  margin: auto;

  ${media.lessThan("large")`
    display: none;
  `}
`