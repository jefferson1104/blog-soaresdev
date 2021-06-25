import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import getThemeColor from '../../utils/getThemeColor'
import * as S from './styled'

const Avatar = () => {
    console.log(getThemeColor())
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: {eq: "soaresDev.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 250) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar