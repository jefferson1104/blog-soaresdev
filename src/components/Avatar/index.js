import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage src="../../images/soaresDev.png" alt="soaresDev" placeholder="tracedSVG" />
    </S.AvatarWrapper>
  )
}

export default Avatar