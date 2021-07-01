import React from 'react'
import propTypes from 'prop-types'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Sidebar = ({
  site: { title, position, description },
  isMenuOpen,
  setIsMenuOpen
}) => (
  <S.SidebarContainer isMenuOpen={isMenuOpen}>
    <Profile
      title={title}
      position={position}
      description={description}
      isMobileHeader={false}
    />
    <S.SidebarLinksContainer>
      <SocialLinks />
      <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.SidebarLinksContainer>
  </S.SidebarContainer>
)

Sidebar.propTypes = {
  site: propTypes.shape({
    title: propTypes.string.isRequired,
    position: propTypes.string.isRequired,
    description: propTypes.string.isRequired
  })
}

export default Sidebar