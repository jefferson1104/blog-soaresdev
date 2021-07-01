import React from "react"
import ReactGA from 'react-ga'

import links from "./content"
import Icons from "./Icons"

import * as S from "./styled"

const socialLinkClickTrack = (social) => {
  ReactGA.event({
    category: 'social link',
    action: 'click',
    label: social
  })
}

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => socialLinkClickTrack(link.label)}
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks