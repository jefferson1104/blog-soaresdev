import styled from 'styled-components'
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 10rem;
    width: 12.28rem;
    margin: auto;

    ${media.lessThan("large")`
      display: none;
    `}
  }
`